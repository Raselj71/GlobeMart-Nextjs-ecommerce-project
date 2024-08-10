import { connectdb } from "@/config/db"
import { ProductModel } from "@/models/ProductModel"
import { NextResponse } from "next/server"


type Params = {
  id: number
}
 
export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id 

    try {
        const conn=await connectdb();

        const getSingleProduct=await ProductModel.findOne({id:id})
        return NextResponse.json(getSingleProduct,{status:200})

    } catch (error) {
        return NextResponse.json({data:"can not fetch data"},{status:500})
        
    }

}
 
