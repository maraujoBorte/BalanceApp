using FluentValidation.Results;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Application.Commons
{
    [ExcludeFromCodeCoverage]
    public class Output<T> where T : notnull
    {
        private List<string> _messages = new();

        private List<string> _errorMessages = new();

        protected T _result;

        public IReadOnlyCollection<string> ErrorMessages => GetMessages(_errorMessages);

        public bool IsValid { get; protected set; }

        public IReadOnlyCollection<string> Messages => GetMessages(_messages);
        
        public Output(bool isValid = true)
        {
            IsValid = isValid;
        }

        public Output(T result)
        {
            IsValid = true;
            AddResult(result);
        }

        public Output(ValidationResult validationResult)
        {
           ProcessValidationResults(validationResult);
        }

        public Output(IEnumerable<ValidationResult> validationResults)
        {
            ProcessValidationResults(validationResults.ToArray());
        }

        public void ProcessValidationResults(params ValidationResult[] validationResults)
        {
            foreach (var validationResult in validationResults)
            {
                AddValidationResult(validationResult);
                CheckValidationResult(validationResult);
            }

            VerifyValidity();
        }

        public static void CheckValidationResult(ValidationResult validationResult)
        {
            if (validationResult == null)
                throw new OutputException("ValidationResult is null, please verify.");
        }

        private static IReadOnlyCollection<string> GetMessages(List<string> messages)
        {
            if(messages == null)
                return (IReadOnlyCollection<string>)(object)Array.Empty<string>();

            return messages.AsReadOnly();
        }

        public static void VerifyMessage(string message)
        {
            if(string.IsNullOrEmpty(message))
                throw new OutputException("Error while trying to add string to Message Collection. It is null or empty, please verify.");
        }

        public void AddErrorMessage(string message)
        {
            AddErrorMessages(message);
        }

        public void AddErrorMessages(params string[] messages)
        {
            CreateMessagesWhenThereIsNone();
            foreach (var text in messages)
            {
                VerifyMessage(text);
                _errorMessages.Add(text);
            }

            VerifyValidity();
        }

        protected virtual void VerifyValidity()
        {
            if (ErrorMessages == null)
                IsValid = true;
            else
                IsValid = ErrorMessages.Count == 0;
        }

        public void AddMessage(string message)
        {
            AddMessages(message);
        }

        public void AddMessages(params string[] messages)
        {
            CreateMessagesWhenThereIsNone();
            foreach (var text in messages)
            {
                VerifyMessage(text);
                _messages.Add(text);
            }
        }

        public void CreateMessagesWhenThereIsNone()
        {
            if (_messages == null)
                _messages = new List<string>();
        }

        public void AddResult(T result)
        {
            if (result == null)
                throw new OutputException("Result object is null, please verify");

            _result = result;
        }

        private void VerifyErrorMessages(ValidationResult validationResult)
        {
            CreateMessagesWhenThereIsNone();
            _errorMessages.AddRange(validationResult.Errors.Select((ValidationFailure e) => e.ErrorMessage).ToList());
        }

        public virtual void AddValidationResult(ValidationResult validationResult)
        {
            CheckValidationResult(validationResult);
            IsValid = validationResult.IsValid;
            VerifyErrorMessages(validationResult);
        }

        public T GetResult()
        {
            return _result;
        }
    }
}
