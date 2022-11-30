using System.Data;
using System.Data.SqlClient;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Context
{
    [ExcludeFromCodeCoverage]
    public class DbContext : IDbContext
    {
        public IDbConnection Connection { get; private set; }

        public IDbTransaction Transaction { get; private set; }

        public DbContext(IDbConnection connection)
        {
            Connection = connection;
            ConnectionInstace();
        }

        public void ConnectionInstace(bool close = false)
        {
            if (Connection?.State != ConnectionState.Open && !close)
            {
                Connection?.Open();
                return;
            }

            if (close)
            {
                Connection?.Close();
            }
        }

        public void BeginTransaction(SqlConnection conn = null)
        {
            Connection = conn ?? Connection;

            if (Transaction?.Connection != null)
                return;

            ConnectionInstace();
            Transaction = Connection.BeginTransaction();
        }

        public void Dispose()
        {
            ConnectionInstace(true);
            Connection.Dispose();
        }
    }
}
