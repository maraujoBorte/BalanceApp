
namespace Balance.Domain.Transaction
{
    public interface ITransactionRepository
    {
        Task<long> InsertTransaction(Transaction transaction);

        Task<Transaction> GetByIdAsync(long id);

        Task<BalanceTransaction> GetBalanceTransaction();

        Task<bool> DeleteTransaction(long id);

        Task<bool> UpdateTransaction(Transaction transaction);
    }
}
