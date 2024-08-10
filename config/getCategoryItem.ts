export async function getCategoryProducts(page = 1, limit = 8,category:any) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product/singlecategory?categoryId=${category}&offset=${(page - 1) * limit}&limit=${limit}`);
 
   if (!response.ok) {
    throw new Error("Failed to load data");
  }
  const { products, total } = await response.json();

  return { products, total };
}