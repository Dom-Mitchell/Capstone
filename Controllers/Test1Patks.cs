// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Capstone.Models;
// namespace Capstone.Controllers
// {
//     // All of these routes will be at the base URL:     /api/Parks
//     // That is what "api/[controller]" means below. It uses the name of the controller
//     // in this case ParksController to determine the URL
//     [Route("api/[controller]")]
//     [ApiController]
//     public class ParksController : ControllerBase
//     {
//         // This is the variable you use to have access to your database
//         private readonly DatabaseContext _context;
//         // Constructor that recives a reference to your database context
//         // and stores it in _context for you to use in your API methods
//         public ParksController(DatabaseContext context)
//         {
//             _context = context;
//         }
//         // GET: api/Parks
//         //
//         // Returns a list of all your Parks
//         //
//         [HttpGet]
//         public async Task<ActionResult<IEnumerable<Park>>> GetParks(string filter)
//         {
//             // Uses the database context in `_context` to request all of the Parks, sort
//             // them by row id and return them as a JSON array.
//             if (filter == null) {
//               return await _context.Parks.OrderBy(row => row.Id).ToListAsync();
//             } else {
//                 // Return the filtered list of parks
//                 return await _context.Parks.OrderBy(row => row.Id).
//                    Where(park => park.Name.ToLower().Contains(filter.ToLower())).
//                    ToListAsync();
//             }
//         }

//         // GET: api/Parks/5
//         //
//         // Fetches and returns a specific park by finding it by id. The id is specified in the
//         // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
//         // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
//         //
//         [HttpGet("{id}")]
//         public async Task<ActionResult<Park>> GetPark(int id)
//         {
//             // Find the park in the database using `FindAsync` to look it up by id
//             var park = await _context.Parks.FindAsync(id);
//             // If we didn't find anything, we receive a `null` in return
//             if (park == null)
//             {
//                 // Return a `404` response to the client indicating we could not find a park with this id
//                 return NotFound();
//             }
//             //  Return the park as a JSON object.
//             return park;
//         }
//         // PUT: api/Parks/5
//         //
//         // Update an individual park with the requested id. The id is specified in the URL
//         // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
//         // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
//         //
//         // In addition the `body` of the request is parsed and then made available to us as a Park
//         // variable named park. The controller matches the keys of the JSON object the client
//         // supplies to the names of the attributes of our Park POCO class. This represents the
//         // new values for the record.
//         //
//         [HttpPut("{id}")]
//         public async Task<IActionResult> PutPark(int id, Park park)
//         {
//             // If the ID in the URL does not match the ID in the supplied request body, return a bad request
//             if (id != park.Id)
//             {
//                 return BadRequest();
//             }
//             // Tell the database to consider everything in park to be _updated_ values. When
//             // the save happens the database will _replace_ the values in the database with the ones from park
//             _context.Entry(park).State = EntityState.Modified;
//             try
//             {
//                 // Try to save these changes.
//                 await _context.SaveChangesAsync();
//             }
//             catch (DbUpdateConcurrencyException)
//             {
//                 // Ooops, looks like there was an error, so check to see if the record we were
//                 // updating no longer exists.
//                 if (!ParkExists(id))
//                 {
//                     // If the record we tried to update was already deleted by someone else,
//                     // return a `404` not found
//                     return NotFound();
//                 }
//                 else
//                 {
//                     // Otherwise throw the error back, which will cause the request to fail
//                     // and generate an error to the client.
//                     throw;
//                 }
//             }
//             // Return a copy of the updated data
//             return Ok(park);
//         }
//         // POST: api/Parks
//         //
//         // Creates a new park in the database.
//         //
//         // The `body` of the request is parsed and then made available to us as a Park
//         // variable named park. The controller matches the keys of the JSON object the client
//         // supplies to the names of the attributes of our Park POCO class. This represents the
//         // new values for the record.
//         //
//         [HttpPost]
//         public async Task<ActionResult<Park>> PostPark(Park park)
//         {
//             // Indicate to the database context we want to add this new record
//             _context.Parks.Add(park);
//             await _context.SaveChangesAsync();
//             // Return a response that indicates the object was created (status code `201`) and some additional
//             // headers with details of the newly created object.
//             return CreatedAtAction("GetPark", new { id = park.Id }, park);
//         }
//         // DELETE: api/Parks/5
//         //
//         // Deletes an individual park with the requested id. The id is specified in the URL
//         // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
//         // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
//         //
//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeletePark(int id)
//         {
//             // Find this park by looking for the specific id
//             var park = await _context.Park.FindAsync(id);
//             if (park == null)
//             {
//                 // There wasn't a park with that id so return a `404` not found
//                 return NotFound();
//             }
//             // Tell the database we want to remove this record
//             _context.Parks.Remove(park);
//             // Tell the database to perform the deletion
//             await _context.SaveChangesAsync();
//             // Return a copy of the deleted data
//             return Ok(park);
//         }
//         // Private helper method that looks up an existing park by the supplied id
//         private bool ParkExists(int id)
//         {
//             return _context.Parks.Any(park => park.Id == id);
//         }
//     }
// }