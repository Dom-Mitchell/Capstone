using System;

namespace Capstone.Models
{
    public class Visit
    {
        public int Id { get; set; }
        public DateTime VisitedAt { get; private set; } = DateTime.Now;
        public string TravelCompanions { get; set; }
        public string Summary { get; set; }
        public bool LikeDislike { get; set; }

        // Visit "belongs to" one park
        public int ParkId { get; set; }
        public Park Park { get; set; }

        // // Adds the database column for the associated user
        // public int UserId { get; set; }

        // // The actual associated object
        // public User User { get; set; }
    }
}