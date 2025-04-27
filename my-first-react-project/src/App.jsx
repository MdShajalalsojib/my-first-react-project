import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Navbar/Blogs/Blogs'
import './App.css'
import { useState } from 'react'

function App() {

  const [bookmakred, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);




  const handleBookMark = (blog) => {
    setBookmarked([...bookmakred, blog])
     
  }
   const handleMarkAsRead = (time,id) => {
     setReadingCount(readingCount + time)
     handleRemoveFromBookmark(id)
   }

   const handleRemoveFromBookmark = (id) => {
    const remainingBookMark = bookmakred.filter((mark) => mark.id !== id);

     setBookmarked(remainingBookMark)
   }
    // console.log(readingCount);

  return (
    <>
       
       <Navbar></Navbar>
        
       <div className="main-container flex text-center mt-5 ">
          <div className="left-container w-[70%]">
              
             <Blogs handleBookMark={handleBookMark} handleMarkAsRead= {handleMarkAsRead}></Blogs>

          </div>
          <div className="right-container w-[30%] bg-gray-50 ">
            <h1>Reading time :{readingCount}</h1>
            <h2>Bookmakred count : {bookmakred.length}</h2>

            {
              bookmakred.map((marked) => <p className='bg-blue-500 p-2 shadow m-2 text-cyan-50 '>{marked.title}</p>)
            }

          </div>

       </div>
       
    </>
  )
}

export default App
