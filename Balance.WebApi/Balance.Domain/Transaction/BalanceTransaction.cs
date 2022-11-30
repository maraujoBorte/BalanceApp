using System.Diagnostics.CodeAnalysis;

namespace Balance.Domain.Transaction
{
    [ExcludeFromCodeCoverage]
    public class BalanceTransaction
    {
        public double Balance { get; set; }

        public IEnumerable<Transaction>? TransactionsNegative { get; set;}

        public IEnumerable<Transaction>? Transactions { get; set; }
    }
}
