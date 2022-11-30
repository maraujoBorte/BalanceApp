using Balance.Application.Commons;
using FluentValidation.Results;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Commons
{
    [ExcludeFromCodeCoverage]
    public class ResponseBase<T> where T : notnull
    {
        private readonly List<string> _messages;

        private readonly List<string> _errorMessages;

        private readonly Dictionary<int, string> _errorCodeMessages;

        public virtual IReadOnlyCollection<string> ErrorMessages => _errorMessages?.AsReadOnly();

        public virtual IReadOnlyCollection<string> Messages => _messages?.AsReadOnly();

        public virtual IReadOnlyDictionary<int, string> ErrorCodeMessages => _errorCodeMessages;

        public bool IsSuccess { get; private set; }

        public T Result { get; private set; }

        public ResponseBase(T result, bool isSuccess = true)
        {

            IsSuccess = isSuccess;
            _messages = new List<string>();
            _errorMessages = new List<string>();
            _errorCodeMessages = new Dictionary<int, string>();
            AddResult(result);
        }

        public ResponseBase(ValidationResult validationResult)
        {
            _messages = new List<string>();
            _errorMessages = new List<string>();
            _errorCodeMessages = new Dictionary<int, string>();

            ProcessValidationResults(validationResult);
        }


        public ResponseBase(IEnumerable<ValidationResult> validationResults)
        {

            _messages = new List<string>();
            _errorMessages = new List<string>();
            _errorCodeMessages = new Dictionary<int, string>();

            ProcessValidationResults(validationResults.ToArray());
        }


        public ResponseBase(IEnumerable<string> messages, bool isSuccess)
        {
            IsSuccess = isSuccess;
            _messages = new List<string>();
            _errorMessages = new List<string>();
            _errorCodeMessages = new Dictionary<int, string>();

            ProcessMessageResults(messages);
        }

        private void ProcessMessageResults(IEnumerable<string> messages)
        {
            if (IsSuccess)
                _messages.AddRange(messages);
            else
                _errorMessages.AddRange(messages);
        }

        public ResponseBase(IEnumerable<string> errorMessages) : this(errorMessages, isSuccess: false) { }


        public ResponseBase(IReadOnlyDictionary<int, string> errorCodeMessages)
        {
            _messages = new List<string>();
            _errorMessages = new List<string>();
            _errorCodeMessages = new Dictionary<int, string>();

            AddErrorCodeMessages(errorCodeMessages);
        }

        public void AddErrorCodeMessages(IReadOnlyDictionary<int, string> errorCodeMessages)
        {
            foreach (var error in errorCodeMessages)
            {
                AddErrorCodeMessage(error.Key, error.Value);
            }
        }

        public void AddErrorCodeMessage(int errorCode, string errorMessage)
        {
            VerifyMessage(errorMessage);
            _errorCodeMessages.Add(errorCode, errorMessage);
            VerifyValidity();
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
            if (messages == null)
                return (IReadOnlyCollection<string>)(object)Array.Empty<string>();

            return messages.AsReadOnly();
        }

        public static void VerifyMessage(string message)
        {
            if (string.IsNullOrEmpty(message))
                throw new OutputException("Error while trying to add string to Message Collection. It is null or empty, please verify.");
        }

        protected virtual void VerifyValidity()
        {
            IsSuccess = ErrorCodeMessages.Count == 0 && ErrorMessages.Count == 0;
        }

        public void AddResult(T result)
        {
            if (result == null)
                throw new OutputException("Result object is null, please verify");

            Result = result;
        }

        private void VerifyErrorMessages(ValidationResult validationResult)
        {
            _errorMessages.AddRange(validationResult.Errors.Select((ValidationFailure e) => e.ErrorMessage).ToList());
        }

        public virtual void AddValidationResult(ValidationResult validationResult)
        {
            IsSuccess = validationResult.IsValid;
            VerifyErrorMessages(validationResult);
        }

    }

}
