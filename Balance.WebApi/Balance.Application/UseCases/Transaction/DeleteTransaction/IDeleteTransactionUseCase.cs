using Balance.Application.Commons;
using MediatR;

namespace Balance.Application.UseCases.Transaction.DeleteTransaction
{

    public interface IDeleteTransactionUseCase : IRequestHandler<DeleteTransactionInput, OutputUseCase>
    {
    }
}
