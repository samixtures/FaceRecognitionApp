import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            passwordInput: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({emailInput: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({passwordInput: event.target.value})
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.emailInput,
                password:this.state.passwordInput
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === "success") {
                    this.props.onRouteChange('home');
                }
        })
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </form>
                </main>
            </article>
        )   
    }
}

export default Register;