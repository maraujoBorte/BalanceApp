using MediatR;
using Balance.Application.Commons;
using D = Balance.Domain.Transaction;

namespace Balance.Application.UseCases.Transaction.InsertTransaction
{
    public class InsertTransactionInput : IRequest<OutputUseCase>
    {
        public DateTime? Date { get; set; }

        public string? Description { get; set; }

        public double? Value { get; set; }

        public long IdTransactionType { get; set; }


        public static implicit operator D.Transaction(InsertTransactionInput insertTransactionInput)
        {
            if(insertTransactionInput == null)
                return new D.Transaction();

            return new D.Transaction()
            {
                Date = insertTransactionInput.Date,
                Description = insertTransactionInput.Description,
                Value = insertTransactionInput.Value,
                IdTransactionType = insertTransactionInput.IdTransactionType,
            };
        }
    }
}
