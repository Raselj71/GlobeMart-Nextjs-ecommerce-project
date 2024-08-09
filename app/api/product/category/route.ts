import { NextRequest, NextResponse } from "next/server";
import { CategoryModel } from "@/models/CategoryModel";
import { connectdb } from "@/config/db";


export async function GET(req:NextRequest){

    try { 
        await connectdb()
           const allcategory=await CategoryModel.find();

           console.log(allcategory)

           return NextResponse.json({data:allcategory},{status:200})
    } catch (error) {
        return NextResponse.json({data:"Failed to fetch"},{status:500})
    }

}