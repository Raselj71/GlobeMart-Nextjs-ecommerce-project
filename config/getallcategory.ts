export default async function getallCategories(){
      const response= await fetch("https://api.escuelajs.co/api/v1/categories");

      if(!response.ok){
        throw new Error("Category can't fetch")
      }

      return response.json()
}