using Dapper;
using System.Data.SqlClient;

namespace Balance.Worker.Data
{
    public class Repository : IRepository
    {
        protected SqlConnection _connection;

        public Repository(SqlConnection connection)
        {
            _connection = connection;
        }

        public async Task<double> GetBalance()
        {
            return await _connection.QueryFirstAsync<double>(@"SELECT SUM(Value) as Value  
                                                               FROM (
                                                                  select SUM(VALUE) * -1 as Value,Date
                                                                  from [Transaction]
                                                                  where IdTransactionType = 1
                                                                  GROUP BY Date
                                                                  
                                                                  UNION ALL
                                                                  
                                                                  select SUM(VALUE) as Value,Date
                                                                  from [Transaction]
                                                                  where IdTransactionType = 2
                                                                  GROUP BY Date
                                                               
                                                               ) as x");
        }
    }
}
