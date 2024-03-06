 import { useState } from 'react'


 function App() {
   const [color, setcolor] = useState("Black")

   return (
     <>
       
       <div className='w-full h-screen duration-150'
       style={{backgroundColor: color}}>
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
   <div className='flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
   <button onClick={()=>setcolor("red")} className='px-4 outline-none py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>

   <button onClick={()=>setcolor("green")} className='px-4 outline-none py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>

   <button onClick={()=>setcolor("blue")} className='px-4 outline-none py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}}>Blue</button>

   <button  onClick={()=>setcolor("olive")} className='px-4 outline-none py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>

   <button onClick={()=>setcolor("purple")} className='px-4 outline-none py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>

   <button onClick={()=>setcolor("orange")} className='px-4 outline-none py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Orange"}}>Orange</button>


    
   </div>
    </div>
       </div>
     </>
   )
 }

 export default App;

