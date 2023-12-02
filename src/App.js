import { useEffect, useState } from "react"
import "./style.css"
export function App() {
    const [show , setShow] = useState("")
    const [showResult , setShowResult] = useState("")
    const [error , setError] = useState(false)
    // const [typing , setTyping] = useState("")
    
    window.addEventListener("keydown" , (e) => {
        
        const button = document.querySelector("#click")
        const b9 = document.querySelector(".b9")
        const b8 = document.querySelector(".b8")
        const b7 = document.querySelector(".b7")
        const b6 = document.querySelector(".b6")
        const b5 = document.querySelector(".b5")
        const b4 = document.querySelector(".b4")
        const b3 = document.querySelector(".b3")
        const b2 = document.querySelector(".b2")
        const b1 = document.querySelector(".b1")
        const b0 = document.querySelector(".b0")

        let a = e.key
        if(a == "Enter") {
            
            button.click()
        }else if(a == "9") {
            
            b9.click()
        }else if(a == "8") {
            b8.click()
        }else if(a == "7") {
            b7.click()
        }else if(a == "6") {
            b6.click()
        }else if(a == "5") {
            b5.click()
        }else if(a == "4") {
            b4.click()
        }else if(a == "3") {
            b3.click()
        }else if(a == "2") {
            b2.click()
        }else if(a == "1") {
            b1.click()
        }else if(a == "0") {
            b0.click()
        }
    } , false)
    return(
        <>

         <div  className="header" 
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
                <div
                style={{
                    width:"100%",
                    padding:"10px 10px",
                    color:"#fff",
                    fontSize:"30px",
                    background:"#000"
                }}>{show} {(error ==true ? <h1>Error</h1> : null)}</div>
                <div className="cal" 
                style={{
                    color:"#fff",
                    fontSize:"30px",
                }}></div>
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
                    <button className="b9" onClick={() => {
                            
                                    
                                    setShow(show +9)

                        
                    }}>9</button>
                    <button className="b8" onClick={() => {
                        
                        
                            setShow(show +8)
                        
                    }}>8</button>
                    <button className="b7" onClick={() => {
                        
                            setShow(show +7)
                    }}>7</button>
                    <button className="b6" onClick={() => {
                        
                            setShow(show +6)
                    }}>6</button>
                    <button className="b5" onClick={() => {
                        
                            setShow(show +5)
                    }}>5</button>
                    <button className="b4" onClick={() => {
                        
                        
                            setShow(show +4) 
                        
                    }}>4</button>
                    <button className="b3" onClick={() => {
                        
                        
                            
                        
                            setShow(show +3)

                    }}>3</button>
                    <button className="b2" onClick={() => {
                        
                        
                            setShow(show +2)
                        
                    }}>2</button>
                    <button className="b1" onClick={() => {
                        
                            setShow(show +1)
                    }}>1</button>
                    <button className="b0" onClick={() => {
                        
                            setShow(show +0)
                    }}>0</button>
                    <button onClick={() => {
                        setShow(show +".")
                    }}>.</button>

                    <button onClick={() => {
                        setShow("")
                        setError("")
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
                    <button id="click" onClick={(e) => {
                        
                        try{
                            
                            setShowResult(eval(show))
                        }catch {

                            
                            setShow("")
                            setError(true)
                        }
                        
                    }}>Enter</button>
                </div>
            </div>
            </div>
            </div>
         </div>
         

        </>
    )
  }