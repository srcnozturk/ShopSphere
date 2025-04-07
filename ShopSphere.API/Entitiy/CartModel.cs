namespace ShopSphere.API.Entitiy;

public class CartModel
{
    public Guid Id { get; set; }
    public string CustomerId { get; set; } = null!;
    public List<CartItemModel> CartItems { get; set; } = new();

    public void AddItem(ProductModel product, int quantity)
    {
        var cartItem = CartItems.FirstOrDefault(x => x.ProductId == product.Id);
        if (cartItem != null)
        {
            cartItem.Quantity += quantity;
        }
        else
        {
            CartItems.Add(new CartItemModel
            {
                Product = product,
                Quantity = quantity
            });
        }
    }

    public void DeleteItem(Guid productId, int quantity)
    {
        var cartItem = CartItems.FirstOrDefault(x => x.ProductId == productId);
        if (cartItem is null) return;

        cartItem.Quantity -= quantity;
        if(cartItem.Quantity == 0) CartItems.Remove(cartItem);
    }
}

public class CartItemModel
{
    public Guid Id { get; set; }
    public Guid ProductId { get; set; }
    public ProductModel Product { get; set; } = null!;
    public Guid CartId { get; set; }
    //public CartModel Cart { get; set; } = null!;
    public int Quantity { get; set; }
}
