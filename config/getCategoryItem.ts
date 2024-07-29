export async function getCategoryProducts(page = 1, limit = 8,category:any) {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}&offset=${(page - 1) * limit}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to load data");
  }
  const products = await response.json();

  const countResponse = await fetch("https://api.escuelajs.co/api/v1/categories");
  if (!countResponse.ok) {
    throw new Error("Failed to load data");
  }
  const allProducts = await countResponse.json();
  const total = allProducts.length;

  return { products, total };
}