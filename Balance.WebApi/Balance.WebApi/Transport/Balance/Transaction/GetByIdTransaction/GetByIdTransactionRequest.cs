using Balance.Application.UseCases.Transaction.GetByIdTransaction;

namespace Balance.WebApi.Transport.Balance.Transaction.GetByIdTransaction
{
    public class GetByIdTransactionRequest
    {
        public long Id { get; set; }

        public static implicit operator GetByIdTransactionInput(GetByIdTransactionRequest getByIdTransactionRequest) 
            => new(getByIdTransactionRequest.Id);
    }
}
