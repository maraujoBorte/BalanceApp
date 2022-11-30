using MediatR;
using Balance.Application.Commons;

namespace Balance.Application.UseCases.Transaction.InsertTransaction
{
    public interface IInsertTransactionUseCase : IRequestHandler<InsertTransactionInput, OutputUseCase>
    {
    }
}
