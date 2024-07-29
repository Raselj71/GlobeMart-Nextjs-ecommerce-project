export async function getallProducts(page = 1, limit = 8) {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${(page - 1) * limit}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to load data");
  }
  const products = await response.json();

  const countResponse = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!countResponse.ok) {
    throw new Error("Failed to load data");
  }
  const allProducts = await countResponse.json();
  const total = allProducts.length;

  return { products, total };
}
