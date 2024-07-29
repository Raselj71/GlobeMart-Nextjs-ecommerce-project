import React, { ReactNode } from 'react'
 type proptypes={
    isOpen:boolean,
    children:ReactNode
    
    
 }
function Modals({isOpen,children}:proptypes) {
  return (
    <>
       {isOpen && <div className='absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.4)] backdrop-blur-sm'>
               <div className='relative top-1/3'>
                  {children}
               </div>
        </div>}
     </>
  )
}

export default Modals