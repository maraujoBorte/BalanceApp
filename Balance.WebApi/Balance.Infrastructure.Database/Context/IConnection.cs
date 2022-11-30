using System.Data;

namespace Balance.Infrastructure.Database.Context
{
    public interface IConnection : IDisposable
    {
        IDbConnection SqlConnectionTrConfiguration();
    }
}
