using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RegisterForm.Models
{
    public class RegisterFormContext: DbContext
    {
        public RegisterFormContext(DbContextOptions<RegisterFormContext> options) : base(options)
        {

        }

        public DbSet<Person> Person { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<User> User { get; set; }

        public void AddPerson(Person person)
        {
            person.Person_ID = null;
            Person.Add(person);
            this.SaveChanges();

            var user = new User()
            {
                Person_ID = person.Person_ID,
                Company_ID = null
            };

            User.Add(user);
            this.SaveChanges();
            return;
        }

        public void AddCompany(Company company)
        {
            var person = company.Person;
            person.Person_ID = null;
            Person.Add(person);
            this.SaveChanges();

            company.Company_ID = null;
            company.Person_ID = person.Person_ID;
            Company.Add(company);
            this.SaveChanges();

            var user = new User()
            {
                Person_ID = null,
                Company_ID = company.Company_ID
            };

            User.Add(user);
            this.SaveChanges();
            return;
        }
    }
}
