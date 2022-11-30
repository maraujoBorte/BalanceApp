using System.Data;
using System.Data.SqlClient;

namespace Balance.Infrastructure.Database.Context
{
    public interface IDbContext : IDisposable
    {
        IDbConnection Connection { get; }

        IDbTransaction Transaction { get; }

        void ConnectionInstace(bool close = false);

        void BeginTransaction(SqlConnection conn = null);
    }
}
