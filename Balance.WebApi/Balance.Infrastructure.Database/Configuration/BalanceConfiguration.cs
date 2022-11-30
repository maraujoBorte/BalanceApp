using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Configuration
{
    [ExcludeFromCodeCoverage]
    public class BalanceConfiguration
    {
        public string? ConnectionStringTrConfiguration { get; set; }
    }
}
