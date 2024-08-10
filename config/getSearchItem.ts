export async function getSearchItem(page = 1, limit = 8,query:any) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product/search?query=${query}&offset=${(page - 1) * limit}&limit=${limit}`);
 
   if (!response.ok) {
    throw new Error("Failed to load data");
  }
  const { products, total } = await response.json();

  return { products, total };
}