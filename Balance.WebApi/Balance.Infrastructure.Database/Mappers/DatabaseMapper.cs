using DapperExtensions;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Mappers
{
    [ExcludeFromCodeCoverage]
    public static class DatabaseMapper
    {
        public static void MapAll()
        {
            DapperAsyncExtensions.SetMappingAssemblies(new[] { 
                typeof(TransactionMapper).Assembly 
            });
        }
    }
}
