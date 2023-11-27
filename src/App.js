import { useState } from "react"
import "./style.css"

export function App() {
    const [show , setShow] = useState("")
    const [cal , setCal] = useState("")
    const [show2 , setShow2] = useState("")
    const [showResult , setShowResult] = useState("")


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
                <div
                style={{
                    width:"100%",
                    padding:"10px 10px",
                    color:"#fff",
                    fontSize:"30px",
                }}>{show}</div>
                <div className="cal" 
                style={{
                    color:"#fff",
                    fontSize:"30px",
                }}>{cal}</div>
                <div 
                style={{
                    width:"100%",
                    padding:"10px 10px",
                    color: "#fff",
                    fontSize:"30px",
                }}>{show2}</div>
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
                            
                            if(cal) {
                                setShow2(show2 +9)
                            }else {
                                setShow(show +9)
                            }
                        
                    }}>9</button>
                    <button onClick={() => {
                        
                        if(cal) {
                        
                            setShow2(show2 +8)
                        }else {
                            setShow(show +8)
                        }
                        
                    }}>8</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 +7)
                        }else {
                            setShow(show +7)
                        }
                    }}>7</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 +6)
                        }else {
                            setShow(show +6)
                        }
                    }}>6</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 +5)
                        }else {
                            setShow(show +5)
                        }
                    }}>5</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 +4)
                        }else {
                            setShow(show +4) 
                        }
                    }}>4</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 + 3)
                        }else {
                            setShow(show +3)
                        }
                    }}>3</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 +2)
                        }else {
                            setShow(show +2)
                        }
                    }}>2</button>
                    <button onClick={() => {
                        
                        if(cal) {
                            setShow2(show2 +1)
                        }else {
                            setShow(show +1)
                        }
                    }}>1</button>
                    <button onClick={() => {
                        
                        if(cal) {

                            setShow2(show2 + 0)
                        }else {
                            setShow(show +0)
                        }
                    }}>0</button>
                    <button onClick={() => {
                        setShow("")
                        setShow2("")
                        setCal("")
                        setShowResult("")
                    }}>reset</button>
                </div>
                <div className="calculates">
                    <button onClick={() => {
                        setCal("+")
                        
                    }}>+</button>
                    <button onClick={() => {
                        setCal("-")
                    }}>-</button>
                    <button onClick={() => {
                        setCal("/")
                    }}>/</button>
                    <button onClick={() => {
                        setCal("*")
                    }}>*</button>
                    <button onClick={() => {
                        if(cal == "+") {
                            setShowResult( parseInt(show) + parseInt(show2)  )
                            
                        }else if (cal == "-") {
                            setShowResult(parseInt(show) - parseInt(show2)  )
                        }else if (cal == "*") {
                            setShowResult(parseInt(show) * parseInt(show2) )
                        }else if (cal == "/") {
                            setShowResult(parseInt(show) / parseInt(show2))
                        }
                        setShow("")
                        setShow2("")
                        setCal("")
                    }}>Enter</button>
                </div>
            </div>
            </div>
            </div>
         </div>

        </>
    )
  }