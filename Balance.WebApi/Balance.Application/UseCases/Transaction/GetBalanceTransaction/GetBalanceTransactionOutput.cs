using D = Balance.Domain.Transaction;

namespace Balance.Application.UseCases.Transaction.GetBalanceTransaction
{
    public class GetBalanceTransactionOutput
    {
        public double Balance { get; set; }

        public IEnumerable<D.Transaction>? TransactionsNegative { get; set; }

        public IEnumerable<D.Transaction>? Transactions { get; set; }
    }
}
