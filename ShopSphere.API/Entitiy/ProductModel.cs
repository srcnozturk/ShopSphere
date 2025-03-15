using System.ComponentModel.DataAnnotations;

namespace ShopSphere.API.Entitiy;

public class ProductModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public bool isActive { get; set; }
    public string? ImageUrl { get; set; }
    public int Stock { get; set; }
}
