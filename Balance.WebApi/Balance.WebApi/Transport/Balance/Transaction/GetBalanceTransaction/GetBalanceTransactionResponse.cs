using Balance.Application.Commons;
using Balance.WebApi.Commons;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Transport.Balance.Transaction.GetBalanceTransaction
{
    [ExcludeFromCodeCoverage]
    public class GetBalanceTransactionResponse
    {
    }

    public static partial class OutputExtensions
    {
        public static GetBalanceTransactionResponse MapGetBalanceTransactionResponse(this OutputUseCase output)
        {
            var response = new Response(new GetBalanceTransactionResponse());

            return response.GetResult<GetBalanceTransactionResponse>();
        }

        public static Response MapToBadGetBalanceTransaction(this OutputUseCase output) => new(output.ErrorMessages, false);
    }
}
