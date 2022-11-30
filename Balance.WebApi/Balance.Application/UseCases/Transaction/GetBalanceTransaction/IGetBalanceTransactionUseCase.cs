using Balance.Application.Commons;
using MediatR;

namespace Balance.Application.UseCases.Transaction.GetBalanceTransaction
{
    public interface IGetBalanceTransactionUseCase : IRequestHandler<GetBalanceTransactionInput, OutputUseCase>
    {
    }
}
