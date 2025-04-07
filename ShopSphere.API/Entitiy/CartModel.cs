namespace ShopSphere.API.Entitiy
{
    public class CartModel
    {
        public Guid Id { get; set; }
        public string CustomerId { get; set; } = null!;
        public List<CartItemModel> CartItems { get; set; } = new();
    }

    public class CartItemModel
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public ProductModel Product { get; set; } = null!;
        public Guid CartId { get; set; }
        public CartModel Cart { get; set; } = null!;
        public int Quantity { get; set; }
    }
}
