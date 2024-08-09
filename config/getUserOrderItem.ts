import { headers } from "next/headers";
export async function getUserOrderItem() {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product/order`,{
      method:"GET",
      headers:headers()
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user order items:', error);
    
  }
}
