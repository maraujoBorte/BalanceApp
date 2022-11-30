using Balance.Application.UseCases.Transaction.DeleteTransaction;

namespace Balance.WebApi.Transport.Balance.Transaction.DeleteTransaction
{
    public class DeleteTransactionRequest
    {
        public long Id { get; set; }

        public static implicit operator DeleteTransactionInput(DeleteTransactionRequest deleteTransactionRequest)
            => new(deleteTransactionRequest.Id);
    }
}
