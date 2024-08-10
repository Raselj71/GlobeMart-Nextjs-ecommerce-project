export async function getallProducts(page = 1, limit = 8) {
  const offset = (page - 1) * limit;
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product/allproduct?offset=${offset}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to load data");
  }
  const { products, total } = await response.json();

  return { products, total };
}

