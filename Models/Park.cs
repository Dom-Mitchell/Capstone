using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Park
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "You must provide a name.")]
        public string Name { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        // One restaurant "has many" reviews
        // public List<Visit> Visits { get; set; }

        // // Adds the database column for the associated user
        // public int UserId { get; set; }

        // // The actual associated object
        // public User User { get; set; }
    }
}