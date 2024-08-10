import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/config/db";
import { ProductModel } from "@/models/ProductModel";

export async function GET(req: NextRequest) {
    try { 
        await connectdb();

        const { searchParams } = new URL(req.url);
        const categoryId = searchParams.get("categoryId");
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");

        if (!categoryId) {
            return NextResponse.json({ data: "Category ID is required" }, { status: 400 });
        }

      
        const categoryFilter = Number(categoryId);

        
        const products = await ProductModel.find({ category: categoryFilter })
            .skip((page - 1) * limit)
            .limit(limit);

        
        const totalProducts = await ProductModel.countDocuments({ category: categoryFilter });

        return NextResponse.json({ products, total: totalProducts, page, limit }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: "Failed to fetch" }, { status: 500 });
    }
}
