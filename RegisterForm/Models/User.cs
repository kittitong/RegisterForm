using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable enable
namespace RegisterForm.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long? User_ID { get; set; }

        [ForeignKey("Person")]
        public long? Person_ID { get; set; }
        public Person Person { get; set; }

        [ForeignKey("Company")]
        public long? Company_ID { get; set; }
        public Company Company { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? CreatedDate { get; set; }
    }
}
