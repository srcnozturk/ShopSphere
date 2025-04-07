namespace ShopSphere.API.Dtos;

public class CartDto
{
    public Guid CartId { get; set; }
    public string CustomerId { get; set; } = null!;
    public List<CartItemDto> CartItems { get; set; } = new();
}

public class CartItemDto
{
    public Guid ProductId { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string ImageUrl { get; set; }
    public int Quantity { get; set; }
}
