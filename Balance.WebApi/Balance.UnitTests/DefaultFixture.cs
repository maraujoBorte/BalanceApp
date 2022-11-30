using Balance.WebApi.Controllers.Balance.V1.Transaction;
using Balance.Application.UseCases.Transaction.DeleteTransaction;
using Moq.AutoMock;
using Moq;
using Microsoft.Extensions.Logging;
using Balance.Application.UseCases.Transaction.InsertTransaction;
using Balance.Application.UseCases.Transaction.UpdateTransaction;
using Balance.Application.UseCases.Transaction.GetByIdTransaction;
using Balance.Application.UseCases.Transaction.GetBalanceTransaction;
using AutoFixture;
using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace Balance.UnitTests
{

    [ExcludeFromCodeCoverage]
    internal class DefaultFixture
    {
        public DefaultFixture()
        {
            var mocker = new AutoMocker();

            TansactionControllerTest = mocker.CreateInstance<TransactionController>();

            //Delete
            DeleteTransactionUseCaseTest = mocker.CreateInstance<DeleteTransaction>();
            DeleteTransactionUseCaseLogger = mocker.GetMock<ILogger<DeleteTransaction>>();

            //Insert
            InsertTransactionUseCaseTest = mocker.CreateInstance<InsertTransaction>();
            InsertTransactionUseCaseLogger = mocker.GetMock<ILogger<InsertTransaction>>();

            //Update
            UpdateTransactionUseCaseTest = mocker.CreateInstance<UpdateTransaction>();
            UpdateTransactionUseCaseLogger = mocker.GetMock<ILogger<UpdateTransaction>>();

            //GetById
            GetByIdTransactionUseCaseTest = mocker.CreateInstance<GetByIdTransaction>();
            GetByIdTransactionUseCaseLogger = mocker.GetMock<ILogger<GetByIdTransaction>>();

            //GetBalance
            GetBalanceTransactionUseCaseTest = mocker.CreateInstance<GetBalanceTransaction>();
            GetBalanceTransactionUseCaseLogger = mocker.GetMock<ILogger<GetBalanceTransaction>>();

            TransactionMediator = mocker.GetMock<IMediator>();
        }

        public TransactionController TansactionControllerTest { get; set; }

        //Delete
        public DeleteTransaction DeleteTransactionUseCaseTest { get; set; }

        public Mock<ILogger<DeleteTransaction>> DeleteTransactionUseCaseLogger { get; set; }

        //Insert
        public InsertTransaction InsertTransactionUseCaseTest { get; set; }

        public Mock<ILogger<InsertTransaction>> InsertTransactionUseCaseLogger { get; set; }

        //Update
        public UpdateTransaction UpdateTransactionUseCaseTest { get; set; }

        public Mock<ILogger<UpdateTransaction>> UpdateTransactionUseCaseLogger { get; set; }

        //GetById
        public GetByIdTransaction GetByIdTransactionUseCaseTest { get; set; }

        public Mock<ILogger<GetByIdTransaction>> GetByIdTransactionUseCaseLogger { get; set; }

        //GetBalance
        public GetBalanceTransaction GetBalanceTransactionUseCaseTest { get; set; }

        public Mock<ILogger<GetBalanceTransaction>> GetBalanceTransactionUseCaseLogger { get; set; }

        public Mock<IMediator> TransactionMediator { get; set; }

        public static Fixture Fixture => new();
    }
}
