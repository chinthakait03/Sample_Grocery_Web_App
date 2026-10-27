import { useState } from "react";
import "./LoginForm.scss"
import type { UserLoginModel } from "../../../models/auth-models";
import { login, setToken } from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";
import logoImage from "../../../assets/images/logo.png"
import { BsEnvelopeFill, BsEyeFill, BsEyeSlashFill, BsLockFill } from "react-icons/bs";

function LoginForm (){

    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const [passwordVisibility , setPasswordVisibility] = useState(false);

    const navigate = useNavigate();

    function togglePasswordVisibility  (){
        setPasswordVisibility(!passwordVisibility);
    }

    async function formSubmit( e:React.SubmitEvent){
        e.preventDefault();
        const loginModel:UserLoginModel = {
                username:username,
                password:password
        }

        // 981210825V  kushan123
        try {
            const response = await login(loginModel);
          //  alert(response);
            setToken(response.token)
            navigate("/customers")



        } catch (error) {
            alert("Login failed.");
        }


    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">

                <form onSubmit={(e) => formSubmit(e)} className="login-form">
                    <img src={logoImage} alt="" className="logo-image"/>
                    <p className="text-center fw-medium sub-text">Sign in to mange inventory , sales and operations</p>

                    <div className="mb-3">
                        <label className="form-label fw-medium " > Email , Mobile & Nic Number</label>
                       
                        <div className="input-group">
                            <span className="input-group-text"><BsEnvelopeFill/></span>
                        <input className="form-control form-control-lg" placeholder="Enter your email ,password & NIC number"  type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/> 
                            {/* e = eevent */}
                        </div>   

                    </div>

                   <div className="mb-3">
                    <label className="form-label fw-medium " >password</label>

                    <div className="input-group">
                        <span className="input-group-text "> <BsLockFill/></span>
                    <input className="form-control form-control-lg password-field " placeholder="Enter your password."
                     type={ passwordVisibility ? "text" : "password"}
                      value={password} onChange={(e) => {setPassword(e.target.value)}}/> 
                         <span className="input-group-text"> 
                            {!passwordVisibility && <BsEyeFill title="Show password"className="cursor-pointer"onClick={ togglePasswordVisibility}/>}
                             {passwordVisibility && <BsEyeSlashFill title="Hide password" className="cursor-pointer"onClick={ togglePasswordVisibility}/>}
                            
                            </span>
                    </div>
                            {/* e = eevent */}
                   </div>
                   
                   
                    
                   <button type="submit" className="btn btn-primary w-100 btn-lg"> Login</button>
                   <p className="text-center fw-medium sub-text mb-0 mt-3"> <BsLockFill/> Secure access for authorized staff only.</p>
                </form>
            </div>
           
        </div>
    );

}

export default LoginForm;