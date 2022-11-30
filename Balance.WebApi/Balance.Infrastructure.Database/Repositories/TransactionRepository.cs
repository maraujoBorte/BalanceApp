using Balance.Domain.Transaction;
using Balance.Infrastructure.Database.Context;
using Balance.Infrastructure.Database.Exceptions;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Repositories
{
    [ExcludeFromCodeCoverage]
    public class TransactionRepository : BaseRepository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(ISqlServerDbContext context, bool Wmapper = false) : base(context, Wmapper) { }

        public async Task<long> InsertTransaction(Transaction transaction)
        {
            long result;

            try
            {
                result = await base.InsertAsync(transaction);
            }
            catch (Exception e)
            {

                throw new DbException<TransactionRepository>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public async Task<bool> DeleteTransaction(long id)
        {
            bool result = false;

            try
            {
                var transaction = await base.GetByIdAsync(id);

                if (transaction != null)
                    result = await base.DeleteAsync(transaction);
            }
            catch (Exception e)
            {

                throw new DbException<TransactionRepository>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public async Task<bool> UpdateTransaction(Transaction transaction)
        {
            bool result;

            try
            {
                result = await base.UpdateAsync(transaction);
            }
            catch (Exception e)
            {

                throw new DbException<TransactionRepository>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public async Task<Transaction> GetByIdAsync(long id)
        {
            Transaction result;

            try
            {
                result = await base.GetByIdAsync(id);
            }
            catch (Exception e)
            {

                throw new DbException<TransactionRepository>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public async Task<BalanceTransaction> GetBalanceTransaction()
        {
            BalanceTransaction result;

            try
            {
                result = new()
                {
                    Transactions = await base.GetAllAsync(),
                    Balance = await base.ExecuteAsync<double>(@"SELECT SUM(Value) FROM (
                                                                  select SUM(VALUE) * -1 as Value
                                                                  from[Transaction]
                                                                  where IdTransactionType = 1
                                                               
                                                               
                                                                  UNION ALL
                                                               
                                                               
                                                                  select SUM(VALUE) as Value
                                                                  from[Transaction]
                                                                  where IdTransactionType = 2
                                                               ) as x
                                                               "),
                    TransactionsNegative = await base.QueryAsync(@"SELECT SUM(Value) as Value, Date  FROM (
                                                                      select SUM(VALUE) * -1 as Value,Date
                                                                      from [Transaction]
                                                                      where IdTransactionType = 1
                                                                      GROUP BY Date
                                                                      
                                                                      UNION ALL
                                                                      
                                                                      select SUM(VALUE) as Value,Date
                                                                      from [Transaction]
                                                                      where IdTransactionType = 2
                                                                      GROUP BY Date
                                                                   
                                                                   ) as x
                                                                   Where Value < 0
                                                                   GROUP BY Date")


                };
            }
            catch (Exception e)
            {

                throw new DbException<TransactionRepository>("There was an error processing your request", e, ClassName);
            }

            return result;
        }
    }
}
