using Balance.Application.Commons;
using Balance.WebApi.Commons;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Transport.Balance.Transaction.UpdateTransaction
{
    [ExcludeFromCodeCoverage]
    public class UpdateTransactionResponse
    {
    }

    public static partial class OutputExtensions
    {
        public static UpdateTransactionResponse MapUpdateTransactionResponse(this OutputUseCase output)
        {
            var response = new Response(new UpdateTransactionResponse());

            return response.GetResult<UpdateTransactionResponse>();
        }

        public static Response MapToBadUpdateTransaction(this OutputUseCase output) => new(output.ErrorMessages, false);
    }
}
