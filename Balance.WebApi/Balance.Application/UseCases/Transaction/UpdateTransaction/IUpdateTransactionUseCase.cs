using Balance.Application.Commons;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Balance.Application.UseCases.Transaction.UpdateTransaction
{
    public interface IUpdateTransactionUseCase : IRequestHandler<UpdateTransactionInput, OutputUseCase>
    {
    }
}
