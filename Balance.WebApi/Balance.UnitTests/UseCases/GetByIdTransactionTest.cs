using Balance.Application.UseCases.Transaction.GetByIdTransaction;
using Balance.Infrastructure.Database.Context;
using Balance.Infrastructure.Database.Repositories;
using Balance.UnitTests.Factories;
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
    public class GetByIdTransactionTest
    {
        private readonly DefaultFixture _fixture = new();

        [Fact]
        public async Task ShouldGetByIdTransactionUseCasesErrorWhenThromException()
        {
            //arrange
            var output = await _fixture.GetByIdTransactionUseCaseTest.Handle(null, It.IsAny<CancellationToken>());

            //assert
            _fixture.GetByIdTransactionUseCaseLogger.Verify(
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
        public async Task ShouldGetByIdTransactionUseCasesIsValid()
        {
            var connection = InMemoryDatabase.GetSQLiteConnection();

            var mocker = new AutoMocker();

            using var con = connection.OpenAndReturn();
            DapperExtensions.DapperExtensions.SqlDialect = new DapperExtensions.Sql.SqliteDialect();

            InMemoryDatabase.CreateMockData(con);

            var mockDatabase = mocker.GetMock<ISqlServerDbContext>();

            mockDatabase.Setup(x => x.Connection).Returns(con);

            var repository = new TransactionRepository(mockDatabase.Object);

            var input = new GetByIdTransactionInput(10);

            var instanceHandle = new GetByIdTransaction(_fixture.GetByIdTransactionUseCaseLogger.Object, repository);

            var output = await instanceHandle.Handle(input, It.IsAny<CancellationToken>());

            output.IsValid.Should().BeTrue();
            output.ErrorMessages.Should().BeNullOrEmpty();
        }

        [Fact]
        public async Task ShouldGetByIdTransactionUseCasesNotFound()
        {
            var connection = InMemoryDatabase.GetSQLiteConnection();

            var mocker = new AutoMocker();

            using var con = connection.OpenAndReturn();
            DapperExtensions.DapperExtensions.SqlDialect = new DapperExtensions.Sql.SqliteDialect();

            InMemoryDatabase.CreateMockData(con);

            var mockDatabase = mocker.GetMock<ISqlServerDbContext>();

            mockDatabase.Setup(x => x.Connection).Returns(con);

            var repository = new TransactionRepository(mockDatabase.Object);

            var input = new GetByIdTransactionInput(45);

            var instanceHandle = new GetByIdTransaction(_fixture.GetByIdTransactionUseCaseLogger.Object, repository);

            var output = await instanceHandle.Handle(input, It.IsAny<CancellationToken>());

            output.IsValid.Should().BeFalse();
            output.ErrorMessages.Should().Contain("Trasaction not found");
        }
    }
}
