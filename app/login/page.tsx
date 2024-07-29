'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { httpaxios } from "@/helper/httphelper"
import Modals from "@/components/Modals";
import Loading from "@/components/Loading";


export default function Page(){
    const router=useRouter()
    const[isLoading, setLoading]=useState(false)
    

    const [user, setUser]=useState<{email:String, password:String}>({
        email:"",
        password:""
    })

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
         const response= await   httpaxios.post('/api/auth/login', user)
         if(response.status===200){
            toast.success("login Successfull")
         }

        } catch (error) {
            toast.error("Invalid Credentials")
        }finally{
            setLoading(false)
        }

    }


    

    return(
         <section className="w-full  mt-10">
              <form className="bg-white mx-5 rounded-md px-10 py-10 md:mx-auto md:w-[80%] lg:w-[50%] " onSubmit={handleSumbit}>
                 <h2 className="text-slate-700 text-2xl text-center pt-7">Login to <span className={`font-semibold `}>GlobeMart</span></h2>
                 <div className="mt-10">
                     <label className="font-semibold text-slate-700" htmlFor="email">Enter Email</label><br/>
                     <input className="w-full bg-slate-200 h-10 px-4 rounded-sm" required type="email" id="email" name="email" placeholder="enter email" value={user.email} onChange={handleInputChange}/>
                 </div>

                  <div className=" mt-4">
                     <label className="font-semibold text-slate-700"  htmlFor="password">Enter password</label><br/>
                     <input  className="w-full bg-slate-200 h-10 px-4 rounded-sm" required type="password" id="password" name="password" placeholder="enter password" value={user.password} onChange={handleInputChange}/>
                 </div>

                 <button className="w-full bg-gray-800 text-white mt-4 text-xl rounded-sm h-10" type="sumbit">Login</button>
                      <p className=" text-slate-700 mt-4 font-medium">Don't have an Account? <span className="underline cursor-pointer" onClick={()=>{router.push("/signup")}}>Signup</span></p>
                      <p className=" text-slate-700 mt-4 font-medium"> <span className="underline cursor-pointer" onClick={()=>{router.push("/forget-password")}}>Forgotten password?</span></p>
              </form>
                <Modals isOpen={isLoading}>
                    <Loading/>
                </Modals>
             <ToastContainer/>
         </section>
    )
}