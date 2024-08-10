import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/config/db";
import { ProductModel } from "@/models/ProductModel";

export async function GET(req: NextRequest) {
    try { 
        await connectdb();

        const { searchParams } = new URL(req.url);
        const offset = parseInt(searchParams.get("offset") || "0");
        const limit = parseInt(searchParams.get("limit") || "10");

        const allproducts = await ProductModel.find({})
            .skip(offset)
            .limit(limit);

        const totalProducts = await ProductModel.countDocuments();

        return NextResponse.json({ products: allproducts, total: totalProducts, offset, limit }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: "Failed to fetch" }, { status: 500 });
    }
}
