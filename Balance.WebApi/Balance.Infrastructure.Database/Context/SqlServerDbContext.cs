using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Context
{
    [ExcludeFromCodeCoverage]
    public class SqlServerDbContext : DbContext, ISqlServerDbContext
    {
        public SqlServerDbContext(IConnection connectionConfig) : base(connectionConfig.SqlConnectionTrConfiguration())
        {
        }
    }
}
