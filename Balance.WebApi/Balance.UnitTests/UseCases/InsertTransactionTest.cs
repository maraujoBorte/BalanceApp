using Balance.Application.UseCases.Transaction.InsertTransaction;
using Balance.Infrastructure.Database.Context;
using Balance.Infrastructure.Database.Repositories;
using Balance.UnitTests.Factories;
using DapperExtensions;
using FluentAssertions;
using Microsoft.Extensions.Logging;
using Moq;
using Moq.AutoMock;
using System;
using System.Threading;
using System.Threading.Tasks;
using Xunit;


namespace Balance.UnitTests.UseCases
{
    public class InsertTransactionTest
    {
        private readonly DefaultFixture _fixture = new();

        [Fact]
        public async Task ShouldInsertTransactionUseCasesErrorWhenThromException()
        {
            //arrange
            var output = await _fixture.InsertTransactionUseCaseTest.Handle(null, It.IsAny<CancellationToken>());

            //assert
            _fixture.InsertTransactionUseCaseLogger.Verify(
                x => x.Log(
                    It.Is<LogLevel>(l => l == LogLevel.Error),
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => true),
                    It.IsAny<Exception>(),
                    It.Is<Func<It.IsAnyType, Exception, string>>((v, t) => true)!), Times.Once);

            output.IsValid.Should().BeFalse();
            output.ErrorMessages.Should().NotBeEmpty();
        }

        [Fact]
        public async Task ShouldInsertTransactionUseCasesIsValid()
        {
            var connection = InMemoryDatabase.GetSQLiteConnection();

            var mocker = new AutoMocker();

            using var con = connection.OpenAndReturn();
            DapperExtensions.DapperExtensions.SqlDialect = new DapperExtensions.Sql.SqliteDialect();
            DapperAsyncExtensions.SqlDialect = new DapperExtensions.Sql.SqliteDialect();

            InMemoryDatabase.CreateMockData(con);

            var mockDatabase = mocker.GetMock<ISqlServerDbContext>();

            mockDatabase.Setup(x => x.Connection).Returns(con);

            var repository = new TransactionRepository(mockDatabase.Object);

            var input = new InsertTransactionInput() { Description = "Tste", Date = DateTime.Now, IdTransactionType = 1, Value = 0 };

            var instanceHandle = new InsertTransaction(_fixture.InsertTransactionUseCaseLogger.Object, repository);

            var output = await instanceHandle.Handle(input, It.IsAny<CancellationToken>());

            output.IsValid.Should().BeTrue();
            output.ErrorMessages.Should().BeNullOrEmpty();
        }

    }
}
