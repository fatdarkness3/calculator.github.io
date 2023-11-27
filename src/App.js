import "./style.css"

export function App() {

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
         <div className="background" 
         style={{
            backgroundColor:"gray",
            padding:"100px",
            borderRadius:"10px"
         }}>
            <div className="part1" 
            style={{
                alignItems:"center",
            justifyContent:"center",
            display:"flex"
            }}>
                <input/>
            </div>
            <div className="part2" 
            style={{
                display:"flex",
                gap:"20px"
            }}>
                <div className="number" 
                style={{
                    display:"flex",
                    flexWrap:"wrap"
                }}>
                    <button>0</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <div className="calculates">
                    <button>+</button>
                    <button>-</button>
                    <button>/</button>
                    <button>+</button>
                </div>
            </div>
            </div>
         </div>

        </>
    )
  }