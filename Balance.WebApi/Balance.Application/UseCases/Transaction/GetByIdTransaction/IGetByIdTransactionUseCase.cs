using Balance.Application.Commons;
using MediatR;

namespace Balance.Application.UseCases.Transaction.GetByIdTransaction
{
    public interface IGetByIdTransactionUseCase : IRequestHandler<GetByIdTransactionInput, OutputUseCase>
    {
    }
}
