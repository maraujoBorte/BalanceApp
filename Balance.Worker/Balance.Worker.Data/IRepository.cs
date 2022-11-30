namespace Balance.Worker.Data
{
    public interface IRepository
    {
        Task<double> GetBalance();
    }
}
