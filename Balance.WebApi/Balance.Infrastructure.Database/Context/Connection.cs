using System.Data;
using System.Data.SqlClient;
using System.Diagnostics.CodeAnalysis;
using Balance.Infrastructure.Database.Configuration;

namespace Balance.Infrastructure.Database.Context
{
    [ExcludeFromCodeCoverage]
    public class Connection : IConnection
    {
        private readonly SqlConnection _sqlConnectionTrConfiguration;

        public Connection(BalanceConfiguration trConfiguration)
        {
            _sqlConnectionTrConfiguration = new SqlConnection(trConfiguration.ConnectionStringTrConfiguration);
        }

        public IDbConnection SqlConnectionTrConfiguration() => _sqlConnectionTrConfiguration;

        public void Dispose()
        {

        }
    }
}
