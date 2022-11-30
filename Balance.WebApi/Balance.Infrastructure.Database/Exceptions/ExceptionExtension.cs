using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Exceptions
{
    [ExcludeFromCodeCoverage]
    public static class ExceptionExtension
    {
        public static string All(this Exception ex)
        {
            var str = string.Empty;
            var exception = ex;

            do
            {
                str = str + exception.Message + Environment.NewLine;
                exception = exception.InnerException;
            }
            while (exception != null);
            return str;
        }
    }
}
