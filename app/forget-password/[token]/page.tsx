'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'
import 'react-toastify/dist/ReactToastify.css';
import { httpaxios } from "@/helper/httphelper"
import Modals from "@/components/Modals"
import Loading from "@/components/Loading"


export default function Page({ params }: { params:String }){
    const router=useRouter()
     const token:String=params
     const[isloading, setLoading]=useState(false)

    
    const[password, setPassword]=useState("")
      

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)

        
       
    }
    const handleSumbit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
         const data={password, token}
         console.log(data)

       
              try {
          
             const response = await fetch("/api/verification/reset-password", {
               method: "POST",
               headers: {
                 "content-type": "application/json",
               },
               body: JSON.stringify(data),
             });
           
            if(response.status===200){
                Swal.fire({
                    title:"password Changed",
                    text:"Your password has been changed",
                    icon:"success"
                })

                router.push('/login')

               

                
            }
        } catch (error) {
            console.log(error)
             Swal.fire({
                    title:"Failed to change password",
                    text:"try again",
                    icon:"error"
                })
        }finally{
            setLoading(false)
        }
        
        
       

    }


    

    return(
         <section className="w-full  mt-10">
              <form className="bg-white mx-5 rounded-md px-10 py-10 md:mx-auto md:w-[80%] lg:w-[50%] " onSubmit={handleSumbit}>
                 <h2 className="text-slate-700 text-2xl text-center pt-7">Reset Password ? </h2>
                 <div className="mt-10">
                     <label className="font-semibold text-slate-700" htmlFor="email">Enter new password</label><br/>
                     <input className="w-full bg-slate-200 h-10 px-4 rounded-sm" required type="password" id="password" name="password" placeholder="*****" value={password} onChange={handleInputChange}/>
                 </div>

                

                 <button className="w-full bg-gray-800 text-white mt-4 text-xl rounded-sm h-10" type='submit'>Set new Password</button>
                      
                      
              </form>

             <ToastContainer/>
             <Modals isOpen={isloading}>
                 <Loading/>
             </Modals>
         </section>
    )
}