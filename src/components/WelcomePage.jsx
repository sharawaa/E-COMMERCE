import { useState } from "react"
import "../Style/welcomePage.css"

export default function WelcomePage(prop){
    const {setLogin} = prop;
    const [userName1, setUserName] = useState("");
    const[password1, setPassword] = useState("");

    return(
        <div  className="container">
            <div className="cards">

                <input className="input" type="text" placeholder="username" onChange={(e)=> setUserName(e.target.value)} />
                <input className="input" type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="button" onClick={()=> setLogin(userName1, password1)}>Log in</button>
            </div>
        </div>
    )
}