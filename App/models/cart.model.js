class CartItem {
  constructor(quantity, productPrice, productTitle, productImageUrl, sum) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.productImageUrl = productImageUrl;
    this.sum = sum;
  }
}

export default CartItem;
