import mongoose,{Connection} from "mongoose";


export async function connectdb(){
      let dburl:string;
   try {
        
       if(process.env.MONGODB!==undefined){
         dburl=process.env.MONGODB

       const{Connection}=   await mongoose.connect(dburl,{
            dbName:"ecommerce"
          })
       }

      
   } catch (error) {

     console.log(error)
    
   }

}

