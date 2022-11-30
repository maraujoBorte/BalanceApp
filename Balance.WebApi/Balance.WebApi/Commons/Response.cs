using FluentValidation.Results;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Commons
{

    [ExcludeFromCodeCoverage]
    public class Response : ResponseBase<object>
    {
        public Response(IEnumerable<string> errorMessages) : base(errorMessages) { }

        public Response(IEnumerable<string> errorMessages, bool isSuccess) : base(errorMessages, isSuccess) { }

        public Response(object result, bool isSuccess = true) : base(result, isSuccess) { }

        public Response(ValidationResult validationResult) : base(validationResult) { }

        public Response(IEnumerable<ValidationResult> validationResults) : base(validationResults) { }

        public Response(IReadOnlyDictionary<int, string> errorCodeMessages) : base(errorCodeMessages) { }

        public T GetResult<T>()
        {
            return (T)base.Result;
        }
    }
}
