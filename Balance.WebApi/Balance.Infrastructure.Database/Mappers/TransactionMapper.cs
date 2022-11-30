using DapperExtensions.Mapper;
using Balance.Domain.Transaction;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Mappers
{
    [ExcludeFromCodeCoverage]
    public class TransactionMapper : ClassMapper<Transaction>
    {
        public TransactionMapper()
        {
            TableName = "Transaction";

            Map(course => course.IdTransaction).Key(KeyType.Identity);
            Map(course => course.IdTransactionType);
            Map(course => course.Description);
            Map(course => course.Date);
            Map(course => course.Value);
        }
    }
}
