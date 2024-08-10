import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/config/db";
import { ProductModel } from "@/models/ProductModel";

export async function GET(req: NextRequest) {
    try { 
        await connectdb();

        const { searchParams } = new URL(req.url);
        const query = searchParams.get("query");
        const products = await ProductModel.find({ title:{$regex:query,$options:"i"} })
        return NextResponse.json({ products}, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ data: "Failed to fetch" }, { status: 500 });
    }
}
