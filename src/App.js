import React,{useState,useEffect, useRef} from 'react'
import './App.css';

function App() {
  
  const [count, setCount] = useState(1)

  var Xpos;
  var Ypos;

  const [image,setImage] = useState();
  onmousemove = function(e){
    Xpos = e.clientX 
    Ypos = e.clientY
  }

  const canvas = useRef()

  useEffect(()=>{
    const image = new Image();
    image.src = "https://thiscatdoesnotexist.com/"
    image.onload = () => setImage(image)
  },[])

  useEffect(()=>{
    if(image && canvas){
      const c = canvas.current.getContext("2d")
      c.fillStyle = 'black'
      c.fillRect(0, 0, 650, 550);
      c.drawImage(image, (400 - 256)/2, 0);
    }
  },[image, canvas]);

  function Draw(){

    const c = canvas.current.getContext("2d")

    var rand = Math.random()*500
    c.drawImage(image, Xpos - (rand/2), Ypos - (rand/2), rand, rand);
    setCount(count+1)

  }

  
 

  

  
  

  return (
    <div className="App">
      <div>
        
        <canvas
        onClick={Draw}
        
        ref={canvas}
        width={window.innerWidth - 50}
        height={window.innerHeight -50}
        />
      </div>
      <div>
        <h1 className="counter">Number of images: {count}</h1>
      </div>
    </div>
  );
}

export default App;
