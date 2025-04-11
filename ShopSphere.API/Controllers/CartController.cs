using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopSphere.API.Data;
using ShopSphere.API.Dtos;
using ShopSphere.API.Entitiy;

namespace ShopSphere.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CartController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    public CartController(ApplicationDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<CartDto>> GetCart()
    {
        return CartToDto(await GetOrCreate());
    }

    [HttpPost]
    public async Task<ActionResult> AddItemToCart(Guid productId, int quantity)
    {
        var cart = await GetOrCreate();

        var product = await _context.Products.FirstOrDefaultAsync(i => i.Id == productId);
        if (product is null) return NotFound();

        cart.AddItem(product, quantity);

        var result = await _context.SaveChangesAsync() > 0;
        if (result) return CreatedAtAction(nameof(GetCart),CartToDto(cart));

        return BadRequest(new ProblemDetails { Title = "Ürün sepete eklenemedi!" });
    }

    private async Task<CartModel> GetOrCreate()
    {
        var cart = await _context.Carts
           .Include(c => c.CartItems)
           .ThenInclude(ci => ci.Product)
           .Where(c => c.CustomerId == Request.Cookies["customerId"])
           .FirstOrDefaultAsync();

        if (cart is null)
        {
            var customerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddMonths(1),
                IsEssential = true
            };
            Response.Cookies.Append("customerId", customerId, cookieOptions);
            cart = new CartModel { CustomerId = customerId };

            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
        }
        return cart;
    }

    [HttpDelete]
    public async Task<ActionResult> RemoveFromCart(Guid productId, int quantity)
    {
        var cart = await GetOrCreate();
        cart.DeleteItem(productId, quantity);
        var result = await _context.SaveChangesAsync() > 0;
        if (result) return CreatedAtAction(nameof(GetCart), CartToDto(cart));

        return BadRequest(new ProblemDetails { Title = "Ürün silinemedi!" });
    }
    private CartDto CartToDto(CartModel cart)
    {
        return new CartDto
        {
            CartId = cart.Id,
            CustomerId = cart.CustomerId,
            CartItems = cart.CartItems.Select(i => new CartItemDto
            {
                ProductId = i.ProductId,
                Name = i.Product.Name,
                Price = i.Product.Price,
                ImageUrl = i.Product.ImageUrl,
                Quantity = i.Quantity
            }).ToList()
        };
    }
}
