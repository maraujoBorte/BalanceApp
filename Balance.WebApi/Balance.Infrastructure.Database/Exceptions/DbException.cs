using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class DbException<T> : Exception where T : class
    {
        public DbException()
        {
        }

        public DbException(Exception e) : base($"[{typeof(T).Name}] {e.All()}")
        {
        }

        public DbException(string message) : base($"[{typeof(T).Name}] {message}")
        {
        }

        public DbException(string message, Exception innerException) : base($"[{typeof(T).Name}] {message}", innerException)
        {
        }

        public DbException(Exception e, string className) : base($"[{className}] {e.All()}")
        {
        }

        public DbException(string message, string className) : base($"[{className}] {message}")
        {
        }
        public DbException(string message, Exception innerException, string className) : base($"[{className}] {message}", innerException)
        {
        }

        public string Service => typeof(T).Name;
    }
}
