using FluentValidation.Results;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Application.Commons
{
    [ExcludeFromCodeCoverage]
    public class OutputUseCase : Output<object>
    {
        public OutputUseCase() : base(isValid: true) { }

        public OutputUseCase(bool isValid = true) : base(isValid) { }

        public OutputUseCase(ValidationResult validationResult) : base(validationResult) { }

        public OutputUseCase(IEnumerable<ValidationResult> validationResults) : base(validationResults) { }

        public OutputUseCase(object result) : base(result) { }

        public new void AddResult(object result)
        {
            _result = result ?? throw new OutputException("Result object is null, please verify.");
        }

        public T GetResult<T>()
        {
            return (T)_result;
        }
    }
}
