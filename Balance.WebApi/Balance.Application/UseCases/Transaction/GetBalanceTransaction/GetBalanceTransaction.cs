using Balance.Application.Commons;
using Balance.Domain.Transaction;
using Microsoft.Extensions.Logging;

namespace Balance.Application.UseCases.Transaction.GetBalanceTransaction
{

    public class GetBalanceTransaction : IGetBalanceTransactionUseCase
    {
        private readonly ILogger<GetBalanceTransaction> _logger;
        private readonly ITransactionRepository _transactionRepository;

        public GetBalanceTransaction(ILogger<GetBalanceTransaction> logger, ITransactionRepository transactionRepository)
        {
            _logger = logger;
            _transactionRepository = transactionRepository;
        }

        public async Task<OutputUseCase> Handle(GetBalanceTransactionInput request, CancellationToken cancellationToken)
        {
            var output = new OutputUseCase(new GetBalanceTransactionOutput());

            try
            {
                var balance = await _transactionRepository.GetBalanceTransaction();

                if (request == null)
                    throw new Exception("Request null");

                if (balance.Equals(0))
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
