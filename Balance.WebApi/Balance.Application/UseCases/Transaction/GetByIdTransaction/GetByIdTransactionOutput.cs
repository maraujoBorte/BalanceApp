namespace Balance.Application.UseCases.Transaction.GetByIdTransaction
{
    public class GetByIdTransactionOutput
    {
        public long IdTransaction { get; set; }

        public DateTime? Date { get; set; }

        public string? Description { get; set; }

        public double? Value { get; set; }

        public long IdTransactionType { get; set; }
    }
}
