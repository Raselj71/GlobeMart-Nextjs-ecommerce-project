'use client'
export default function Page(){
    return <section>
            <h1>Add you product</h1>

            <form>
              <div>
                  <label htmlFor="product id">Product id</label>
                  <input type="text" name="id" id="id"/>
              </div>

                <div>
                  <label htmlFor="product title">Product title</label>
                  <input type="text" name="title" id="title"/>
              </div>

               <div>
                  <label htmlFor="product id">Product price</label>
                  <input type="text" name="price" id="
                  price"/>
              </div>

               <div>
                  <label htmlFor="product id">Product description</label>
                   <textarea name="description" id="description" cols="30" rows="10"></textarea>
              </div>

            </form>


    </section>
}