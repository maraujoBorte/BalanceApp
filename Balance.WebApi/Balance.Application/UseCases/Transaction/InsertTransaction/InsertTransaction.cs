using Microsoft.Extensions.Logging;
using Balance.Application.Commons;
using Balance.Domain.Transaction;

namespace Balance.Application.UseCases.Transaction.InsertTransaction
{
    public class InsertTransaction : IInsertTransactionUseCase
    {
        private readonly ILogger<InsertTransaction> _logger;
        private readonly ITransactionRepository _transactionRepository;

        public InsertTransaction(ILogger<InsertTransaction> logger, ITransactionRepository transactionRepository)
        {
            _logger = logger;
            _transactionRepository = transactionRepository;
        }

        public async Task<OutputUseCase> Handle(InsertTransactionInput request, CancellationToken cancellationToken)
        {
            var output = new OutputUseCase();

            try
            {
                var insertedTransaction = await _transactionRepository.InsertTransaction(request);

                if (request == null)
                    throw new Exception("Request null");

                if (insertedTransaction.Equals(0))
                {
                    var outputError = new OutputUseCase();
                    outputError.AddErrorMessage("Problems to insert transaction");
                    return outputError;
                }

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
