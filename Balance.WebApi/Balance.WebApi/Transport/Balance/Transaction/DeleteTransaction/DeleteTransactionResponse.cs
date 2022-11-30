using Balance.Application.Commons;
using Balance.WebApi.Commons;
using System.Diagnostics.CodeAnalysis;

namespace Balance.WebApi.Transport.Balance.Transaction.DeleteTransaction
{
    [ExcludeFromCodeCoverage]
    public class DeleteTransactionResponse
    {
    }

    public static partial class OutputExtensions
    {
        public static DeleteTransactionResponse MapDeleteTransactionResponse(this OutputUseCase output)
        {
            var response = new Response(new DeleteTransactionResponse());

            return response.GetResult<DeleteTransactionResponse>();
        }

        public static Response MapToBadDeleteTransaction(this OutputUseCase output) => new(output.ErrorMessages, false);
    }
}
