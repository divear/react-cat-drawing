import React,{useState,useEffect, useRef} from 'react'
import './App.css';

function App() {
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
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    const c = canvas.current.getContext("2d")
    c.strokeStyle = "teal"
    c.lineWidth = 10
    
    c.fillStyle = color
    var rand = Math.random()*500
    c.drawImage(image, Xpos - (rand/2), Ypos - (rand/2), rand, rand)

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
        
      </div>
    </div>
  );
}

export default App;
