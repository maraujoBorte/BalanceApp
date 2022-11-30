using System.Diagnostics.CodeAnalysis;
using System.Runtime.Serialization;

namespace Balance.Application.Commons
{
    [ExcludeFromCodeCoverage]
    public class OutputException : Exception
    {
        public OutputException(string message) : base(message)
        {

        }

        public OutputException(string message, Exception innerException) : base(message, innerException)
        {

        }

        public OutputException(SerializationInfo info, StreamingContext context) : base(info, context)
        {

        }
    }
}
