import { useEffect, useState } from "react"
import "./style.css"

export function App() {
    const [show , setShow] = useState("")
    const [showResult , setShowResult] = useState("")
    
    // const [typing , setTyping] = useState("")

    return(
        <>

         <div className="header" 
         style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            transform: `translate(${-50}%, ${-50}%)` ,
            position:"absolute",
            top:"50%",
            left:"50%",

         }}>
            <div className="wrapper">
         <div className="background" 
         style={{
            backgroundColor:"black",
            padding:"100px",
            borderRadius:"10px"
         }}>
            <div className="flex">
          <div className="part1">
                <input
                
                value={show}
                style={{
                    width:"100%",
                    padding:"10px 10px",
                    color:"#fff",
                    fontSize:"30px",
                    background:"#000"
                }}/>
                <div className="cal" 
                style={{
                    color:"#fff",
                    fontSize:"30px",
                }}></div>
                {/* <div 
                style={{
                    width:"100%",
                    padding:"10px 10px",
                    color: "#fff",
                    fontSize:"30px",
                }}>{show2}</div> */}
          </div>
            <div className="showResult" 
            style={{
                width:"100%",
                padding:"10px 10px",
                color:"#fff",
                fontSize:"50px"
            }}>
                {showResult}
                    
            </div>
            </div>
            <div className="part2" 
            style={{
                display:"flex",
                gap:"20px",
                paddingTop:"50px"
            }}>
                <div className="number" 
                style={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"10px"
                }}>
                    <button onClick={() => {
                            
                                    
                                    setShow(show +9)

                        
                    }}>9</button>
                    <button onClick={() => {
                        
                        
                            setShow(show +8)
                        
                    }}>8</button>
                    <button onClick={() => {
                        
                            setShow(show +7)
                    }}>7</button>
                    <button onClick={() => {
                        
                            setShow(show +6)
                    }}>6</button>
                    <button onClick={() => {
                        
                            setShow(show +5)
                    }}>5</button>
                    <button onClick={() => {
                        
                        
                            setShow(show +4) 
                        
                    }}>4</button>
                    <button onClick={() => {
                        
                        
                            
                        
                            setShow(show +3)

                    }}>3</button>
                    <button onClick={() => {
                        
                        
                            setShow(show +2)
                        
                    }}>2</button>
                    <button onClick={() => {
                        
                            setShow(show +1)
                    }}>1</button>
                    <button onClick={() => {
                        
                            setShow(show +0)
                    }}>0</button>
                    <button onClick={() => {
                        setShow(show +".")
                    }}>.</button>

                    <button onClick={() => {
                        setShow("")
                        
                        setShowResult("")
                    }}>reset</button>
                </div>
                <div className="calculates">
                    <button onClick={() => {
                        setShow(show + "+")
                        
                    }}>+</button>
                    <button onClick={() => {
                        setShow(show + "-")
                    }}>-</button>
                    <button onClick={() => {
                        setShow(show +"/")
                    }}>÷</button>
                    <button onClick={() => {
                        setShow(show +"*")
                    }}>×</button>
                    <button onClick={() => {
                        setShowResult(eval(show))
                    }}>Enter</button>
                </div>
            </div>
            </div>
            </div>
         </div>

        </>
    )
  }