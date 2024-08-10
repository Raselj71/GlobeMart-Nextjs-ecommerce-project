import Button from "@/components/Button";
import ImageSlider from "@/components/ImageSlider";
import getSingleProduct from "@/config/getSingleProduct";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
async function page({ params }: any) {
  const product = await getSingleProduct(params.id);

  const hasImages = product.images && product.images.length > 0;

  return (
    <div className="w-full flex justify-center">
      <ToastContainer />
      <section className="container flex flex-col lg:flex-row lg:gap-2 justify-center">
        <div className="flex flex-col justify-center items-center max-w-[1200px]">
          <div className="w-[450px] md:w-[600px] h-[280px] bg-white md:h-[400px] lg:w-[700px] lg:h-[450px] m-0 m-auto rounded-lg">
            {hasImages ? (
              <ImageSlider slides={product.images} />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No images available</p>
              </div>
            )}
          </div>

          <div className="mt-10 font-medium text-lg w-full bg-white px-8 rounded-sm py-2 pb-6">
            <p>{product.title}</p>
            <div className="flex flex-col mt-4 px-4">
              <div className="flex justify-between mb-2">
                <p className="font-bold">
                  Price: <span className="text-xl">{product.price}</span>$
                </p>
                {/* <p>{product.category.name}</p> */}
              </div>
              <Button
                id={product.id}
                image={hasImages ? product.images[0] : null}
                price={product.price}
                title={product.title}
              />
            </div>
          </div>
        </div>

        <div className="bg-white mt-4 lg:mt-0 lg:px-4 lg:py-4">
          <p className="font-bold px-4 lg:text-xl lg:mt-10">Description</p>
          <p className="px-4 lg:mt-4">{product.description}</p>
        </div>
      </section>
    </div>
  );
}

export default page;
