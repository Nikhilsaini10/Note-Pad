import React, { useState } from 'react'

const App = () => {

  const [ title , setTitle] = useState('');
  const [details , serDetails] = useState('');

  const [task, setTask] = useState([])

  function submitted(e){
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)

    // console.log(copyTask);
    

    setTitle('')
    serDetails('')  
  }

  const noteDelete = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  

  return (
    <div className='bg-black h-screen w-full grid sm:grid-cols-1 md:grid-cols-1 text-white lg:grid-cols-2 '>
      <form onSubmit={(e)=>{
          submitted(e)
        }} className=' h-full flex flex-col items-center gap-5 py-10'>
        <h1 className='text-3xl font-bold text-center p-5 ' >Helloo Friends</h1>
        <input type="text" placeholder='Write Heading' className='bg-gray-500 border-2 p-2 w-3/4 rounded'
        value={title}
        onChange={(e) =>{
          setTitle(e.target.value)
          // console.log("Hello World");
          
        }}
        />
        <textarea placeholder='Write Details' rows={7}  className='bg-gray-500 border-2 p-2 w-3/4 rounded'
        value={details}
        onChange={(e) =>{
          serDetails(e.target.value)
        }}
        ></textarea>
        <button className='bg-white active:bg-gray-400 active:text-white text-black p-2 w-1/4 rounded font-bold'>Click Me</button>
      </form>
      <div className=' bg-gray-800 h-auto flex flex-col items-center lg:border-l-2 py-10'>
       <h1 className='text-3xl font-bold pb-5'>My Notes</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-3 justify-center flex-wrap'>

        {task.map(function(elem , idx){
          return  <div key={idx} className='bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] h-50 rounded m-3 text-black p-4 bg-cover overflow-hidden flex flex-col justify-between' >
            <div>
            <h2 className='text-2xl leading-tight font-bold text-center pt-3'>{elem.title}</h2>
            <p className='leading-tight text-center text-gray-500 italic mt-1'>{elem.details}</p>
            </div>
            <button onClick={() =>{
              noteDelete(idx)
            }} className='bg-red-500 text-white font-bold p-0.5 rounded active:bg-gray-400 active:scale-95'>Delete</button>
          </div>
        })}

      {/* <div className='bg-white h-50 rounded m-3' ></div>
      <div className='bg-white h-50 rounded m-3' ></div>
      <div className='bg-white h-50 rounded m-3' ></div>
      <div className='bg-white h-50 rounded m-3' ></div>
      <div className='bg-white h-50 rounded m-3' ></div>
      <div className='bg-white h-50 rounded m-3' ></div> */}
       </div>
      </div>
    </div>
  )
}

export default App
