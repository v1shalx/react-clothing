import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Connect, connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up,component';
import { auth , createUserProfileDocument} from './firebase/firebase.uitls';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null
  //   };

  // }

unsubscribeFromAuth=null;

componentDidMount() {
  const {setCurrentUser}=this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
        
            id: snapShot.id,
            ...snapShot.data()
          
        });

      });
    }

    setCurrentUser(userAuth );
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}
  render(){
    return (
      <div>
     <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
        </div>
     
    );
    
  };

  

  }

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })
  
  export default connect(null, mapDispatchToProps)(App);
  