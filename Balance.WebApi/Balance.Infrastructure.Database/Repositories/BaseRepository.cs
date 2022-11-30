using DapperExtensions;
using Balance.Domain.Commons;
using Balance.Infrastructure.Database.Context;
using Balance.Infrastructure.Database.Exceptions;
using Balance.Infrastructure.Database.Mappers;
using DapperExtensions.Mapper;
using Dapper;
using System.Data;
using System.Diagnostics.CodeAnalysis;

namespace Balance.Infrastructure.Database.Repositories
{
    [ExcludeFromCodeCoverage]
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected readonly IDbContext Context;
        protected string ClassName;

        protected BaseRepository(IDbContext context, bool withouMapper)
        {
            Context = context;
            ClassName = $"{GetType().Namespace}.{GetType().Name}";

            if (!withouMapper)
                DatabaseMapper.MapAll();
        }

        public virtual async Task<long> InsertAsync<T1>(T1 obj) where T1 : class
        {
            long result;

            try
            {
                result = await DapperAsyncExtensions.InsertAsync(Context.Connection, obj, Context.Transaction);
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public virtual async Task<bool> DeleteAsync<T1>(T1 obj) where T1 : class
        {
            bool result;

            try
            {
                result = await DapperAsyncExtensions.DeleteAsync(Context.Connection, obj, Context.Transaction);
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public virtual async Task<bool> UpdateAsync<T1>(T1 obj) where T1 : class
        {
            bool result;

            try
            {
                result = await DapperAsyncExtensions.UpdateAsync(Context.Connection, obj, Context.Transaction);
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result;
        }


        public virtual async Task<TR> ExecuteAsync<TR>(string query, object? parameters = null, CommandType commandType = CommandType.Text) where TR : new()
        {
            TR result;

            try
            {
                result = await Context.Connection.ExecuteScalarAsync<TR>(query, parameters, Context.Transaction, commandType: commandType);
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public virtual async Task<IEnumerable<T>> QueryAsync(string query, object? parameters = null, CommandType commandType = CommandType.Text)
        {
            IEnumerable<T> result;

            try
            {
                result = await Context.Connection.QueryAsync<T>(query, parameters, Context.Transaction, commandType: commandType);
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public virtual async Task<List<T>> GetAllAsync(object? predicate = null) 
        {
            IEnumerable<T> result;

            try
            {
                result = await Context.Connection.GetListAsync<T>(predicate,transaction:Context.Transaction);
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result.AsList();
        }

        public virtual async Task<T> GetByIdAsync(dynamic id)
        {
            T result;

            try
            {
                var isNumeric = int.TryParse(Convert.ToString(id), out int n);

                var mapper = await DapperAsyncExtensions.GetMap<T>();

                var key = mapper.Properties.Where(c =>
                    c.KeyType == KeyType.Assigned ||
                    c.KeyType == KeyType.Identity ||
                    c.KeyType == KeyType.SequenceIdentity).FirstOrDefault();

                if (key == null)
                    throw new DbException<T>("There wan an erro processing your request", new Exception("Primary key not is defined"), ClassName);

                var filter = isNumeric ? id : $"'{id}'";

                result = await Context.Connection.QueryFirstOrDefaultAsync<T>($"SELECT * FROM [{mapper.TableName}] WHERE {key.ColumnName} = {filter}");
            }
            catch (Exception e)
            {
                Context.Transaction?.Rollback();

                throw new DbException<T>("There was an error processing your request", e, ClassName);
            }

            return result;
        }

        public void Dispose()
        {
            Context.Connection.Dispose();
        }
    }
}
