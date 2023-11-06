import "./Login.css";


function Login() {
    return (
 <div className="login">
 <div className="topp">
 <h1>Kirish eMaktab</h1>
<p>tizimni ruyxatdan utkazmagansiz?</p>
 </div>
  

   

    <div className="urta">
    <h3>Login</h3>
    <input type="text" />
    <h3>Parol</h3>
    <input type="text" /> 
    <br/>
    <button className="but">Tizimga kirish</button>
    <div className="past">
<p>? parolni unutizmi yoki loginni bu tizimga kiring</p>
    </div>
    </div>
   
 
    

 

 </div>

    ) 
        
        
    }
export default Login;
        
        
    