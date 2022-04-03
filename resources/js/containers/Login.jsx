import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import FormInputGroup from "./../components/Form/FormInputGroup";
import useForm from './../hooks/useForm';
import { startLogin } from './../actions/auth';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch=useDispatch();
    const [{dni,password},handleInputChange,reset]=useForm({
        dni:'',
        password:''
    })
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        
        dispatch(startLogin(dni,password));
        navigate('/admin');
        console.log('navego');
    }
    return (
        <div className="login-form">
            <form onSubmit={handleLogin}>
                <h2 className="text-center">Iniciar Sesión</h2>
                <FormInputGroup>
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FaUser />
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="dni"
                        onChange={handleInputChange}
                        placeholder="DNI"
                        required="required"
                        value={dni}
                    />
                </FormInputGroup>
                <FormInputGroup>
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FaLock />
                        </span>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Contraseña"
                        required="required"
                        value={password}
                    />
                </FormInputGroup>
                <div className="form-group">
                    <button
                        type="submit"
                        className="btn btn-primary login-btn btn-block"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
