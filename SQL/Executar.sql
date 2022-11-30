CREATE TABLE [Transaction](
IdTransaction int primary key identity(1,1),
IdTransactionType int,
Date Datetime,
Description varchar(255),
Value DECIMAL(15,2))


INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-08-29 12:00:00.000','Cartão de Debito',825.82)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-08-29 03:00:00.000','Curso C# ',200.00)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(2,'2022-08-31 03:00:00.000','Salario',7000.00)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-09-01 03:00:00.000','Mercado',3000.00)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-09-01 03:00:00.000','Farmacia',300.00)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-09-01 03:00:00.000','Combustivel',800.25)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-09-15 03:00:00.000','Financiamento Carro',900.00)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(1,'2022-09-22 03:00:00.000','Financiamento Casa',1200.00)

INSERT INTO [Transaction](IdTransactionType,Date,Description,Value) 
VALUES(2,'2022-09-25 03:00:00.000','Freelance',2500)

--- Query questão 5. a)
SELECT SUM(Value) as Value, Date  
into #table
FROM (
   select SUM(VALUE) * -1 as Value,Date
   from [Transaction]
   where IdTransactionType = 1
   GROUP BY Date
   
   UNION ALL
   
   select SUM(VALUE) as Value,Date
   from [Transaction]
   where IdTransactionType = 2
   GROUP BY Date

) as x
GROUP BY Date

select *
from #table

select SUM(VALUE) as SaldoFinal
from #table

DROP TABLE #table

