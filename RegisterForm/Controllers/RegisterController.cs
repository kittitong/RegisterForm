using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RegisterForm.Models;

namespace RegisterForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly ILogger<RegisterController> _logger;
        private readonly RegisterFormContext _database;

        public RegisterController(ILogger<RegisterController> logger, RegisterFormContext context)
        {
            _logger = logger;
            _database = context;
        }

        [HttpPost]
        [Route("person")]
        public IActionResult Person([FromBody] Person request)
        {
            _logger.LogInformation("Register person for card Id: {Card_ID}", request.Card_ID);
            _database.AddPerson(request);
            return Ok(request);
        }

        [HttpPost]
        [Route("company")]
        public IActionResult Company([FromBody] Company request)
        {
            _logger.LogInformation("Register company for Tax Id: {Tax_ID}", request.Tax_ID);
            _database.AddCompany(request);
            return Ok(request);
        }

        [HttpGet]
        [Route("user-person")]
        public object GetUsers()
        {
            var person = _database.Person.ToList();
            var company = _database.Company.ToList();
            return new {
                person = person,
                company = company
            };
        }
    }
}
