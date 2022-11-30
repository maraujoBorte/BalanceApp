using Balance.Application.Commons;
using Balance.WebApi.Commons;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Transport.Balance.Transaction.InsertTransaction
{
    [ExcludeFromCodeCoverage]

    public class InsertTransactionResponse
    {
    }

    public static partial class OutputExtensions
    {
        public static InsertTransactionResponse MapInsertTransactionResponse(this OutputUseCase output)
        {
            var response = new Response(new InsertTransactionResponse());

            return response.GetResult<InsertTransactionResponse>();
        }

        public static Response MapToBadInsertTransaction(this OutputUseCase output) => new(output.ErrorMessages, false);
    }
}
