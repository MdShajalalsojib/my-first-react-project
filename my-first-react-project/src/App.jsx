import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Navbar/Blogs/Blogs'
import './App.css'
import { useState } from 'react'

function App() {

  const [bookmakred, setBookmarked] = useState([]);



  const handleBookMark = (blog) => {
    setBookmarked([...bookmakred, blog])
     
  }
  console.log(bookmakred);
   

  return (
    <>
       
       <Navbar></Navbar>
        
       <div className="main-container flex text-center mt-5 ">
          <div className="left-container w-[70%]">
              
             <Blogs handleBookMark={handleBookMark}></Blogs>

          </div>
          <div className="right-container w-[30%] bg-gray-50 ">
            <h1>Reading time : 0</h1>
            <h2>Bookmakred count : 0</h2>

            {
              bookmakred.map((marked) => <p>{marked.title}</p>)
            }

          </div>

       </div>
       
    </>
  )
}

export default App
