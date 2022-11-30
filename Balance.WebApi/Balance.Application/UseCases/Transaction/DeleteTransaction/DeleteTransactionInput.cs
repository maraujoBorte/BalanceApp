using Balance.Application.Commons;
using MediatR;

namespace Balance.Application.UseCases.Transaction.DeleteTransaction
{
    public class DeleteTransactionInput : IRequest<OutputUseCase>
    {
        public DeleteTransactionInput(long id) => Id = id;
        public long Id { get; set; }
    }
}
