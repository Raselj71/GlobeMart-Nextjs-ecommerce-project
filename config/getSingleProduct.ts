export default async function getSingleProduct(id:any){
    const response= await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    if(!response.ok){
        throw new Error("Failed to load single product")
    }

    return response.json()

}