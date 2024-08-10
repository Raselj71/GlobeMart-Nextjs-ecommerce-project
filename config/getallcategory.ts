export default async function getallCategories(){
      const response= await fetch(`${process.env.NEXTAUTH_URL}/api/product/category`);

      if(!response.ok){
        throw new Error("Category can't fetch")
      }
      const item=await response.json()
      return item.data;
}