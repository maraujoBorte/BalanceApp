using Balance.Worker.Data;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Configuration;
using MimeKit;

namespace Balance.Worker.Service
{
    public class EmailService : IEmailService
    {
        protected IRepository _repository;
        protected IConfiguration _configuration;
        public EmailService(IRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _configuration = configuration;
        }
        public async void SendEmail()
        {
            var balance = await _repository.GetBalance();

            if (balance < 0)
            {
                var message = new MimeMessage
                {
                    Sender = MailboxAddress.Parse(_configuration["Email:User"])
                };

                message.To.Add(MailboxAddress.Parse(_configuration["Email:To"]));
                message.Subject = "Saldo do fluxo de caixa negativo";

                message.Body = new BodyBuilder() { HtmlBody = "Saldo do fluxo de caixa negativo" }.ToMessageBody();

                var smtp = new SmtpClient();

                smtp.Connect("smtp.office365.com", 587, SecureSocketOptions.StartTls);
                smtp.Authenticate(_configuration["Email:User"], _configuration["Email:Password"]);
                smtp.Send(message);
                smtp.Disconnect(true);
            }
        }
    }
}