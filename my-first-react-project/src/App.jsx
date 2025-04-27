import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Navbar/Blogs/Blogs'
import './App.css'

function App() {
   

  return (
    <>
       
       <Navbar></Navbar>
        
       <div className="main-container flex text-center ">
          <div className="left-container w-[70%]">
              
             <Blogs></Blogs>

          </div>
          <div className="right-container w-[30%] bg-gray-50 ">
            <h1>Reading time : 0</h1>
            <h2>Bookmakred count : 0</h2>

          </div>

       </div>
       
    </>
  )
}

export default App
