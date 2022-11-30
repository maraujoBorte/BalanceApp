using Balance.Application.Commons;
using Balance.WebApi.Commons;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Transport.Balance.Transaction.GetByIdTransaction
{
    [ExcludeFromCodeCoverage]

    public class GetByIdTransactionResponse
    {
    }

    public static partial class OutputExtensions
    {
        public static GetByIdTransactionResponse MapGetByIdTransactionResponse(this OutputUseCase output)
        {
            var response = new Response(new GetByIdTransactionResponse());

            return response.GetResult<GetByIdTransactionResponse>();
        }

        public static Response MapToBadGetByIdTransaction(this OutputUseCase output) => new(output.ErrorMessages, false);
    }
}
