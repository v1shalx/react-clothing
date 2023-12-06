import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.uitls";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''

        }
    }

    handleSubmit = event => {
        event.preventDefault(); // Fixed the typo here
    
        this.setState({ email: '', password: '' });
      }

handeChange = event =>{
    const {value,name}=event.target;
    this.setState({[name]:value})
}

    render(){
        return(
            <div className="sign-in">
                <h2> I already have  an account</h2>
                <span>sign in with your email and  password</span>



                <form onSubmit={this.handleSubmit}>
                <FormInput
                 name="email"
                  type="email"
                handlechange={this.handeChange} 
                value={this.state.email}
                label="email"
                 required

                 />
                
                <FormInput
                 name="password"
                  type="password" 
                  value={this.state.email} 
                handlechange={this.handeChange}
                label="password"
                required

                />

                <div className="buttons">
                <CustomButton type="submit">
                    sign in
                </CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>
                { ' '}
                    sign in with google { ' '}
                </CustomButton>


                </div>
                
               
                </form>
            </div>
        )
    }
}

export default SignIn;