using Balance.Application.UseCases.Transaction.UpdateTransaction;

namespace Balance.WebApi.Transport.Balance.Transaction.UpdateTransaction
{

    public class UpdateTransactionRequest
    {
        public long IdTransaction { get; set; }
        public DateTime? Date { get; set; }

        public long IdTransactionType { get; set; }

        public string? Description { get; set; }

        public double? Value { get; set; }

        public static implicit operator UpdateTransactionInput(UpdateTransactionRequest updateTransactionInput)
        {
            if (updateTransactionInput == null)
                return new UpdateTransactionInput();

            return new UpdateTransactionInput()
            {
                IdTransaction = updateTransactionInput.IdTransaction,
                Date = updateTransactionInput.Date,
                Description = updateTransactionInput.Description,
                Value = updateTransactionInput.Value,
                IdTransactionType = updateTransactionInput.IdTransactionType,
            };
        }

    }

}
