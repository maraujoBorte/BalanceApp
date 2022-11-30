using System.Diagnostics.CodeAnalysis;

namespace Balance.Domain.Transaction
{
    [ExcludeFromCodeCoverage]
    public class Transaction
    {
        public long IdTransaction { get; set; }

        public long IdTransactionType { get; set; }    

        public DateTime? Date { get; set; }

        public string? Description { get; set; }

        public double? Value { get; set; }
    }
}
