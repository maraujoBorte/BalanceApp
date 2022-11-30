using Balance.Domain.Transaction;
using ServiceStack.OrmLite;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Diagnostics.CodeAnalysis;

namespace Balance.UnitTests.Factories
{
    [ExcludeFromCodeCoverage]
    public static class InMemoryDatabase
    {
        public static SQLiteConnection GetSQLiteConnection()
        {
            return new SQLiteConnection("Data Source=vfs=memdb");
        }

        public static List<Transaction> GenerateData()
        {
            var data = new List<Transaction>();

            for (int i = 0; i < 30; i++)
            {
                data.Add(new Transaction()
                {
                    IdTransaction = i + 1,
                    IdTransactionType = 1,
                    Date = DateTime.Now,
                    Description = "Transaction Teste",
                    Value = 10
                });
            }

            return data;
        }

        public static void CreateMockData(this SQLiteConnection connection)
        {
            OrmLiteConfig.DialectProvider = SqliteDialect.Provider;
            OrmLiteConfig.DialectProvider.NamingStrategy = new OrmLiteNamingStrategyBase();

            string sql = @"CREATE TABLE IF NOT EXISTS [Transaction](
                           IdTransaction int,
                           IdTransactionType int,
                           Date Datetime,
                           Description varchar(255),
                           Value DECIMAL(15,2))";

            SQLiteCommand command = new(sql, connection);
            command.ExecuteNonQuery();

            foreach (var item in GenerateData())
            {
                connection.Insert(item);
            }
        }
    }

}
