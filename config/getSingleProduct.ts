export default async function getSingleProduct(id:any){
    const response= await fetch(`${process.env.NEXTAUTH_URL}/api/product/singleproduct/${id}`)
    if(!response.ok){
        throw new Error("Failed to load single product")
    }

    return response.json()

}