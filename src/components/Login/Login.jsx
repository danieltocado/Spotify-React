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
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'https://www.google.com',
            // This must be true.
            handleCodeInApp: true,
            iOS: {
              bundleId: 'com.google.ios'
            },
            android: {
              packageName: 'com.google.android',
              installApp: true,
              minimumVersion: '12'
            },
            dynamicLinkDomain: 'google.page.link'
          };
          fire.auth().sendSignInLinkToEmail(this.state.email, actionCodeSettings)
  .then(function() {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', this.state.email);
  })
  .catch(function(error) {
    // Some error occurred, you can inspect the code: error.code
  });
    }

    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            toast('Usuario Logeado con éxito.',{
                type: 'success'
            })
        }).catch((error) => {
            console.log(error);
            toast('Error en los credenciales.',{
                type: 'error'
            })
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
