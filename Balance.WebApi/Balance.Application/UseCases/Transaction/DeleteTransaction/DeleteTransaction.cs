using Balance.Application.Commons;
using Balance.Domain.Transaction;
using Microsoft.Extensions.Logging;

namespace Balance.Application.UseCases.Transaction.DeleteTransaction
{

    public class DeleteTransaction : IDeleteTransactionUseCase
    {
        private readonly ILogger<DeleteTransaction> _logger;
        private readonly ITransactionRepository _transactionRepository;

        public DeleteTransaction(ILogger<DeleteTransaction> logger, ITransactionRepository transactionRepository)
        {
            _logger = logger;
            _transactionRepository = transactionRepository;
        }

        public async Task<OutputUseCase> Handle(DeleteTransactionInput request, CancellationToken cancellationToken)
        {
            var output = new OutputUseCase();

            try
            {
                var balance = await _transactionRepository.DeleteTransaction(request.Id);

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
