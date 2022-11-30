using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Microsoft.Extensions.Logging;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Application.Commons
{
    [ExcludeFromCodeCoverage]
    public sealed class FailFastValidationBehavior<TRequest, TOutput> : IPipelineBehavior<TRequest, TOutput> where TOutput : OutputUseCase, new()
    {
        private readonly ILogger<FailFastValidationBehavior<TRequest, TOutput>> _logger;

        private readonly IEnumerable<IValidator<TRequest>> _validators;

        public FailFastValidationBehavior(ILogger<FailFastValidationBehavior<TRequest, TOutput>> logger, IEnumerable<IValidator<TRequest>> validators)
        {
            _logger = logger;
            _validators = validators;
        }

        public async Task<TOutput> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TOutput> next)
        {
            IEnumerable<ValidationResult> validationResults = ProcessValidations(request);
            TOutput result = CreateResult(validationResults);
            return await VerifyNextStepAsync(request, result, next).ConfigureAwait(continueOnCapturedContext: false);
        }

        private IEnumerable<ValidationResult> ProcessValidations(TRequest request)
        {
            foreach (var item in _validators)
            {
                yield return item.Validate(request);
            }
        }

        public static TOutput CreateResult(IEnumerable<ValidationResult> validationResults)
        {
            if (typeof(TOutput) == typeof(OutputUseCase))
                return (TOutput)new OutputUseCase(validationResults);

            return CreateTOutputWithValidatonResult(validationResults);
        }

        private static TOutput CreateTOutputWithValidatonResult(IEnumerable<ValidationResult> validationResults)
        {
            TOutput val = new TOutput();
            val.ProcessValidationResults(validationResults.ToArray());
            return val;
        }

        private async Task<TOutput> VerifyNextStepAsync(TRequest request, OutputUseCase output, RequestHandlerDelegate<TOutput> processToCommandHandler)
        {
            if (output.IsValid)
                return await processToCommandHandler().ConfigureAwait(continueOnCapturedContext: false);

            TOutput nextStep = output as TOutput;
            _logger.LogWarning("Validation for> {requestType} failed.", request.GetType().Name);
            return nextStep;
        }
    }

}
