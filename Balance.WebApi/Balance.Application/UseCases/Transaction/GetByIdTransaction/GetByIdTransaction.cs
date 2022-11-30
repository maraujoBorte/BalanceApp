using Balance.Application.Commons;
using Balance.Domain.Transaction;
using Microsoft.Extensions.Logging;

namespace Balance.Application.UseCases.Transaction.GetByIdTransaction
{

    public class GetByIdTransaction : IGetByIdTransactionUseCase
    {
        private readonly ILogger<GetByIdTransaction> _logger;
        private readonly ITransactionRepository _transactionRepository;

        public GetByIdTransaction(ILogger<GetByIdTransaction> logger, ITransactionRepository transactionRepository)
        {
            _logger = logger;
            _transactionRepository = transactionRepository;
        }

        public async Task<OutputUseCase> Handle(GetByIdTransactionInput request, CancellationToken cancellationToken)
        {
            var output = new OutputUseCase(new GetByIdTransactionOutput());

            try
            {
                var transaction = await _transactionRepository.GetByIdAsync(request.Id);

                if (transaction == null || transaction.Equals(0))
                {
                    var outputError = new OutputUseCase();
                    outputError.AddErrorMessage("Trasaction not found");
                    return outputError;
                }

                output.AddResult(transaction);

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
