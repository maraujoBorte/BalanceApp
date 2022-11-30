using Balance.Application.Commons;
using MediatR;

namespace Balance.Application.UseCases.Transaction.GetByIdTransaction
{
    public class GetByIdTransactionInput : IRequest<OutputUseCase>
    {
        public GetByIdTransactionInput(long id) => Id = id;
        public long Id { get; set; }
    }
}
