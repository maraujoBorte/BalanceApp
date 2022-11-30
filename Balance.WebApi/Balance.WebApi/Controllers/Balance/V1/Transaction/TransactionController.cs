using Balance.Application.UseCases.Transaction.DeleteTransaction;
using Balance.Application.UseCases.Transaction.GetBalanceTransaction;
using Balance.Application.UseCases.Transaction.GetByIdTransaction;
using Balance.Application.UseCases.Transaction.InsertTransaction;
using Balance.Application.UseCases.Transaction.UpdateTransaction;
using Balance.WebApi.Transport.Balance.Transaction.DeleteTransaction;
using Balance.WebApi.Transport.Balance.Transaction.GetByIdTransaction;
using Balance.WebApi.Transport.Balance.Transaction.InsertTransaction;
using Balance.WebApi.Transport.Balance.Transaction.UpdateTransaction;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Balance.WebApi.Controllers.Balance.V1.Transaction
{
    [ApiVersion("1")]
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class TransactionController : Controller
    {
        private readonly IMediator _mediator;

        public TransactionController(IMediator mediator) => _mediator = mediator;

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> InsertTransaction([FromBody][Required] InsertTransactionRequest request, CancellationToken cancellationToken)
        {
            try
            {
                InsertTransactionInput input = request;

                var output = await _mediator.Send(input, cancellationToken).ConfigureAwait(false);

                if (output.IsValid)
                {
                    return Ok(output);
                }

                return BadRequest(output.MapToBadInsertTransaction());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetByIdTransaction([FromQuery] GetByIdTransactionRequest request, CancellationToken cancellationToken)
        {
            try
            {
                GetByIdTransactionInput input = request;

                var output = await _mediator.Send(input, cancellationToken).ConfigureAwait(false);

                if (output.IsValid)
                {
                    return Ok(output.GetResult());
                }

                return BadRequest(output.MapToBadGetByIdTransaction());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetBalanceTransaction")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetBalanceTransaction(CancellationToken cancellationToken)
        {
            try
            {
                var output = await _mediator.Send(new GetBalanceTransactionInput(), cancellationToken).ConfigureAwait(false);

                if (output.IsValid)
                {
                    return Ok(output.GetResult());
                }

                return BadRequest(output.MapToBadGetByIdTransaction());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> DeleteTransaction([FromQuery] DeleteTransactionRequest request, CancellationToken cancellationToken)
        {
            try
            {
                DeleteTransactionInput input = request;

                var output = await _mediator.Send(input, cancellationToken).ConfigureAwait(false);

                if (output.IsValid)
                {
                    return Ok(output.GetResult());
                }

                return BadRequest(output.MapDeleteTransactionResponse());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> UpdateTransaction([FromBody][Required] UpdateTransactionRequest request, CancellationToken cancellationToken)
        {
            try
            {
                UpdateTransactionInput input = request;

                var output = await _mediator.Send(input, cancellationToken).ConfigureAwait(false);

                if (output.IsValid)
                {
                    return Ok(output.GetResult());
                }

                return BadRequest(output.MapUpdateTransactionResponse());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
