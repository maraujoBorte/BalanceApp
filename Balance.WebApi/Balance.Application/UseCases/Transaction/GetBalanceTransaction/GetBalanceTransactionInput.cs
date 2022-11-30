using Balance.Application.Commons;
using MediatR;

namespace Balance.Application.UseCases.Transaction.GetBalanceTransaction
{
    public class GetBalanceTransactionInput : IRequest<OutputUseCase>
    {
    }
}
