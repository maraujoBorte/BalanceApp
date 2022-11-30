using AutoFixture;
using Balance.Application.Commons;
using Balance.Application.UseCases.Transaction.DeleteTransaction;
using Balance.Application.UseCases.Transaction.GetBalanceTransaction;
using Balance.Application.UseCases.Transaction.GetByIdTransaction;
using Balance.Application.UseCases.Transaction.InsertTransaction;
using Balance.Application.UseCases.Transaction.UpdateTransaction;
using Balance.WebApi.Transport.Balance.Transaction.DeleteTransaction;
using Balance.WebApi.Transport.Balance.Transaction.GetByIdTransaction;
using Balance.WebApi.Transport.Balance.Transaction.InsertTransaction;
using Balance.WebApi.Transport.Balance.Transaction.UpdateTransaction;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Balance.UnitTests.Controllers
{
    public class TransactionControllerTest
    {
        private readonly DefaultFixture _fixture = new();

        [Fact]
        public async Task ShouldInsertTransactionErrorWhenThromException()
        {
            //arrange
            InsertTransactionRequest request = new()
            {
                Date = new DateTime(),
                Description = "Teste",
                IdTransactionType = 1,
                Value = 200
            };

            //act
            var output = await _fixture.TansactionControllerTest.InsertTransaction(request, It.IsAny<CancellationToken>());

            //assert

            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldInsertTransactionReturnBadRequestError()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<InsertTransactionRequest>()
               .With(p => p.Date, new DateTime())
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddErrorMessage("Error");

            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<InsertTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.InsertTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldInsertTransactionReturnOk()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<InsertTransactionRequest>()
               .With(p => p.Date, new DateTime())
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddMessage("Success");


            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<InsertTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.InsertTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.OK, ((ObjectResult)output).StatusCode);
        }


        [Fact]
        public async Task ShouldDeleteTransactionErrorWhenThromException()
        {
            //arrange
            DeleteTransactionRequest request = new()
            {
                Id = 1
            };

            //act
            var output = await _fixture.TansactionControllerTest.DeleteTransaction(request, It.IsAny<CancellationToken>());

            //assert

            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldDeleteTransactionReturnBadRequestError()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<DeleteTransactionRequest>()
               .With(p => p.Id, 1)
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddErrorMessage("Error");

            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<DeleteTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.DeleteTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldDeleteTransactionReturnOk()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<DeleteTransactionRequest>()
               .With(p => p.Id, 1)
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddMessage("Success");


            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<DeleteTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.DeleteTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.OK, ((ObjectResult)output).StatusCode);
        }


        [Fact]
        public async Task ShouldGetByIdTransactionErrorWhenThromException()
        {
            //arrange
            GetByIdTransactionRequest request = new()
            {
                Id = 1
            };

            //act
            var output = await _fixture.TansactionControllerTest.GetByIdTransaction(request, It.IsAny<CancellationToken>());

            //assert

            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldGetByIdTransactionReturnBadRequestError()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<GetByIdTransactionRequest>()
               .With(p => p.Id, 1)
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddErrorMessage("Error");

            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<GetByIdTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.GetByIdTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldGetByIdTransactionReturnOk()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<GetByIdTransactionRequest>()
               .With(p => p.Id, 1)
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddMessage("Success");


            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<GetByIdTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.GetByIdTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.OK, ((ObjectResult)output).StatusCode);
        }


        [Fact]
        public async Task ShouldUpdateTransactionErrorWhenThromException()
        {
            //arrange
            UpdateTransactionRequest request = new()
            {
                Date = new DateTime(),
                Description = "Teste",
                IdTransactionType = 1,
                Value = 200
            };

            //act
            var output = await _fixture.TansactionControllerTest.UpdateTransaction(request, It.IsAny<CancellationToken>());

            //assert

            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldUpdateTransactionReturnBadRequestError()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<UpdateTransactionRequest>()
               .With(p => p.Date, new DateTime())
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddErrorMessage("Error");

            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<UpdateTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.UpdateTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldUpdateTransactionReturnOk()
        {
            //arrange
            var request = DefaultFixture.Fixture.Build<UpdateTransactionRequest>()
               .With(p => p.Date, new DateTime())
               .Create();

            var outpuSetup = new OutputUseCase();
            outpuSetup.AddMessage("Success");


            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<UpdateTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.UpdateTransaction(request, It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.OK, ((ObjectResult)output).StatusCode);
        }


        [Fact]
        public async Task ShouldGetBalanceTransactionErrorWhenThromException()
        {
            //act
            var output = await _fixture.TansactionControllerTest.GetBalanceTransaction(It.IsAny<CancellationToken>());

            //assert

            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldGetBalanceTransactionReturnBadRequestError()
        {
            //arrange
            var outpuSetup = new OutputUseCase();
            outpuSetup.AddErrorMessage("Error");

            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<GetBalanceTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.GetBalanceTransaction(It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.BadRequest, ((ObjectResult)output).StatusCode);
        }

        [Fact]
        public async Task ShouldGetBalanceTransactionReturnOk()
        {
            //arrange
            var outpuSetup = new OutputUseCase();
            outpuSetup.AddMessage("Success");


            _fixture.TransactionMediator.Setup(x => x.Send(It.IsAny<GetBalanceTransactionInput>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(outpuSetup);

            //act
            var output = await _fixture.TansactionControllerTest.GetBalanceTransaction(It.IsAny<CancellationToken>());

            //assert
            Assert.NotNull(output);
            Assert.Equal((int)HttpStatusCode.OK, ((ObjectResult)output).StatusCode);
        }

    }
}
