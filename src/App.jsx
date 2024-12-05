
import React, { useEffect, useState } from 'react'
import book from "./assets/book.png"
import { IoIosSearch } from "react-icons/io";

const App = () => {
   

  const [input,setInput]=useState("")
  const [item,setItem]= useState("hello")
  const [data,setDate]=useState([])

    function fetcher(){
     fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${item}`)
     .then((res)=>res.json())
     .then(( resp)=>{

       console.log(resp);
       setDate(  resp)
  
      })    
        .catch((error)=>console.log(error))
  
    }
    useEffect (()=>{
     fetcher()
        },[item])
        const searchfun=()=>{
          setItem(input)
        }
  return (
    < >
    <div className=' bg-[#eeeeee]'>
    <div className='relative  flex justify-center pt-5 '>       
           <img src={book} className='w-100vh h-[700px]' alt="" />
        </div>
    <h1 className=' absolute top-[50px] left-[400px] text-4xl font-semibold '>Digital Dictionary</h1>
    <div className='absolute top-[300px] left-[250px]  flex items-center'>
      <input type="text" className=' h-16 outline-none border-b-2 w-[300px] ms-24 p-5  rounded-lg bg-[#]'placeholder='type here' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={searchfun} className='text-2xl ms-5  bg-white p-4 rounded-lg'><IoIosSearch /></button>
    </div>

   
    <div className='absolute top-[100px] left-[780px]  w-[300px]'>
      <div >
      
        <h2> <strong>Definitions:</strong> </h2>
        {data.length > 0 ? (data.map((entry, index) => (
            <div className='text-[12px] ' key={index}>
              <h3>{entry.word}</h3>
              {entry.meanings.map((meaning, i) => (
                <div key={i} >
                  <p >
                    <strong className='text-l'>Part of Speech:</strong> {meaning.partOfSpeech}
                  </p>
                  <ul className='w-[500px]'>
                    {meaning.definitions.map((def, j) => (
                      <li key={j} className=''>{def.definition}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  


    </div>


    </>
  )
}

export default App