using System.Data;

namespace Balance.Domain.Commons
{
    public interface IBaseRepository<T> : IDisposable where T : class
    {
        Task<long> InsertAsync<T1>(T1 obj) where T1 : class;

        Task<T> GetByIdAsync(dynamic id);

        Task<TR> ExecuteAsync<TR>(string query, object? parameters = null, CommandType commandType = CommandType.Text) where TR : new();

        Task<List<T>> GetAllAsync(object? predicate = null);

        Task<IEnumerable<T>> QueryAsync(string query, object? parameters = null, CommandType commandType = CommandType.Text);

        Task<bool> DeleteAsync<T1>(T1 obj) where T1 : class;

        Task<bool> UpdateAsync<T1>(T1 obj) where T1 : class;
    }
}
