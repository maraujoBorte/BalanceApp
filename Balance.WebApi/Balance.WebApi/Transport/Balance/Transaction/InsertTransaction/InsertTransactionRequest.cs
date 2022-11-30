using Balance.Application.UseCases.Transaction.InsertTransaction;

namespace Balance.WebApi.Transport.Balance.Transaction.InsertTransaction
{
    public class InsertTransactionRequest
    {
        public DateTime? Date { get; set; }

        public long IdTransactionType { get; set; }

        public string? Description { get; set; }

        public double? Value { get; set; }

        public static implicit operator InsertTransactionInput(InsertTransactionRequest insertTransactionInput)
        {
            if (insertTransactionInput == null)
                return new InsertTransactionInput();

            return new InsertTransactionInput()
            {
                Date = insertTransactionInput.Date,
                Description = insertTransactionInput.Description,
                Value = insertTransactionInput.Value,
                IdTransactionType = insertTransactionInput.IdTransactionType,
            };
        }

    }
}
