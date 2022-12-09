using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable enable
namespace RegisterForm.Models
{
    public class Company
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long? Company_ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Tax_ID { get; set; }

        [Required]
        [MaxLength(100)]
        public string? CompanyName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Email { get; set; }

        [Required]
        [MaxLength(200)]
        public string? Address { get; set; }

        [Required]
        [MaxLength(20)]
        public string? PhoneNumber { get; set; }

        [Required]
        public long? ContactPerson_ID { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? CreatedDate { get; set; }

        [Required]
        [ForeignKey("Person")]
        public long? Person_ID { get; set; }
        public Person? Person { get; set; }
    }
}
