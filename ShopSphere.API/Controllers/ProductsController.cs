using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopSphere.API.Data;
using ShopSphere.API.Entitiy;

namespace ShopSphere.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products=await _context.Products.ToListAsync();
            return Ok(products);
        }
        [HttpGet("{id}")]
        public async  Task<IActionResult> GetProduct(Guid id) {

            if (id == default) return NotFound();
            var product =await _context.Products.FindAsync(id);
            if (product == default) return NotFound();
            return Ok(product);
        }
    }
}
