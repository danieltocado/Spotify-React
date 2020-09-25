import React, { Component } from "react";
import fire from "../../config/firebase";
import "./Login.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }

    }

    signup(event) {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        })
        toast('Usuario registrado con éxito.',{
            type: 'success'
        })
    }

    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        })
        toast('Usuario Logeado con éxito.',{
            type: 'success'
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        return (
            <div className="login">
                <div className="modal-dialog modal-login">
                <div className="modal-content">
                    <div className="modal-header">
                    <div className="avatar">
                        <img src="https://www.tutorialrepublic.com/examples/images/avatar.png" alt="Avatar" />
                    </div>
                    <h4 className="modal-title">Iniciar sesión</h4>
                    
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Correo electrónico"
                            required="required"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Contraseña"
                            required="required"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block login-btn"
                            onClick={this.login}
                        >
                            Login
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block login-btn"
                            onClick={this.signup}
                        >
                            Signup
                        </button>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                    <a onClick={this.signup}>¿Aún no tienes cuenta?</a>
                    </div>
                </div>
                </div>
            <ToastContainer/>
            </div>
        )
        };
}

export default Login;
