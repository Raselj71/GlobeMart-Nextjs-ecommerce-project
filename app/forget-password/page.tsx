'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { httpaxios } from "@/helper/httphelper"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import Modals from "@/components/Modals";
import Loading from "@/components/Loading";


export default function Page(){
    const router=useRouter()
    

    const [user, setUser]=useState<{email:string, }>({
        email:"",
        
    })

    const [isloading, setLoading]=useState(false)

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        setUser((state)=>({
            ...state,
            [name]:value
        }))

        
       
    }
    const handleSumbit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
         setLoading(true)
        try {
             toast.info("Email is sending")
            const response=await httpaxios.post('/api/verification/forget-password',user)
           
            if(response.status===200){
                Swal.fire({
                    title:"Check your inbox",
                    text:"We send an email in your account",
                    icon:"info"
                })

               

                
            }
        } catch (error) {
            console.log(error)
             Swal.fire({
                    title:"Failed to send email",
                  
                    icon:"error"
                })
        }finally{
            setLoading(false)
        }
        
       

    }


    

    return(
         <section className="w-full  mt-10">
              <form className="bg-white mx-5 rounded-md px-10 py-10 md:mx-auto md:w-[80%] lg:w-[50%] " onSubmit={handleSumbit}>
                 <h2 className="text-slate-700 text-2xl text-center pt-7">Forget Password ? </h2>
                 <div className="mt-10">
                     <label className="font-semibold text-slate-700" htmlFor="email">Enter Email</label><br/>
                     <input className="w-full bg-slate-200 h-10 px-4 rounded-sm" required type="email" id="email" name="email" placeholder="enter email" value={user.email} onChange={handleInputChange}/>
                 </div>

                

                 <button className="w-full bg-gray-800 text-white mt-4 text-xl rounded-sm h-10" type='submit'>Reset Password</button>
                      
                      
              </form>

             <ToastContainer/>
             <Modals isOpen={isloading}>
                <Loading/>
             </Modals>
         </section>
    )
}