using Balance.Application.Commons;
using Balance.Domain.Transaction;
using Microsoft.Extensions.Logging;

namespace Balance.Application.UseCases.Transaction.UpdateTransaction
{

    public class UpdateTransaction : IUpdateTransactionUseCase
    {
        private readonly ILogger<UpdateTransaction> _logger;
        private readonly ITransactionRepository _transactionRepository;

        public UpdateTransaction(ILogger<UpdateTransaction> logger, ITransactionRepository transactionRepository)
        {
            _logger = logger;
            _transactionRepository = transactionRepository;
        }

        public async Task<OutputUseCase> Handle(UpdateTransactionInput request, CancellationToken cancellationToken)
        {
            var output = new OutputUseCase();

            try
            {
                var balance = await _transactionRepository.UpdateTransaction(request);

                if (request == null)
                    throw new Exception("Request null");

                if (!balance)
                {
                    var outputError = new OutputUseCase();
                    outputError.AddErrorMessage("Trasaction not found");
                    return outputError;
                }

                output.AddResult(balance);

                return output;
            }
            catch (Exception ex)
            {
                _logger.LogError("Message error content: {@request} - Exception:{Exception}", request, ex.Message);
                output.AddErrorMessage(ex.Message);
                return output;
            }
        }
    }

}
