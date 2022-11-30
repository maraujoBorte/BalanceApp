using Balance.Application.Commons;
using MediatR;
using D = Balance.Domain.Transaction;


namespace Balance.Application.UseCases.Transaction.UpdateTransaction
{
    public class UpdateTransactionInput : IRequest<OutputUseCase>
    {
        public long IdTransaction { get; set; }

        public DateTime? Date { get; set; }

        public string? Description { get; set; }

        public double? Value { get; set; }

        public long IdTransactionType { get; set; }


        public static implicit operator D.Transaction(UpdateTransactionInput updateTransactionInput)
        {
            if (updateTransactionInput == null)
                return new D.Transaction();

            return new D.Transaction()
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
