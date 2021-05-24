import React,{useState,useEffect, useRef} from 'react'
import './App.css';

function App() {
  
  const [count, setCount] = useState(1);
  const [cos, setCos] = useState(false)

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
    var rand = Math.random()*500;
    setCount(count+1)
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    c.fillStyle = color

    if(cos){
      c.fillRect(Xpos - (rand/2), Ypos - (rand/2), rand, rand);
    }else{
      c.drawImage(image, Xpos - (rand/2), Ypos - (rand/2), rand, rand);
    }

  }

  function Change(e){
    setCos(e.target.checked);
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
      <div className="info">
        <h1>Number of images: {count}</h1>
        <div onChange={e => Change(e)} className="choose">
          <h1>Cats</h1>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <h1>Squares</h1>
        </div>
      </div>
      
    </div>
  );
}

export default App;
