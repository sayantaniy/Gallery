
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = <h3 className='font-bold absolute text-sm text-gray-400 top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]'>Loading....</h3>
  
  if(userData.length>0){
  printUserData = userData.map((elem,idx) => {
    return  <div key={idx}>
        <a href={elem.url} target='_blank'>
    <div className='h-40 w-44 bg-white rounded-2xl overflow-hidden'>
      <img className='h-full w-full object-cover ' key={idx} src={elem.download_url} alt={elem.author} />
      </div>
      <h2 className='font-bold text-sm pt-2'>{elem.author}</h2>
      </a>
    </div>
  })
}

  return (
    <div className='bg-black overflow-auto text-white h-screen '>
      
      <div className='flex flex-wrap gap-4 p-6 justify-around items-baseline'>
        {printUserData}
      </div>

      <div className='flex flex-row justify-center items-center gap-4 pb-6'>

         <button 
         style={{ opacity: index == 1 ? 0.5 : 1}}
         
         className='flex flex-row justify-center items-center px-4 py-2 rounded-full font-bold bg-amber-300 text-black hover:bg-amber-500 cursor-pointer text-sm'
         onClick={()=>{
          if (index>1){
            setIndex(index-1)
            setUserData([])
          }
         }}>Prev</button>

         <h1> Page {index} </h1>

        <button 
        
        className='flex flex-row justify-center items-center px-4 py-2 rounded-full font-bold bg-amber-300 text-black hover:bg-amber-500 cursor-pointer text-sm'
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        >
          Next</button>
      </div>
    </div>
  )
}

export default App

