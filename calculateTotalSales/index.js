function calculateTotalSales(produts, taxRate) {
  const totalSales = produts.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const taxAmount = (totalSales * taxRate) / 100;
  return totalSales + taxAmount;
}

console.log(
  calculateTotalSales(
    [
      { product: 'apple', price: 10, quantity: 4 },
      { product: 'apple', price: 10, quantity: 4 },
      { product: 'apple', price: 10, quantity: 4 }
    ],
    109
  )
);
