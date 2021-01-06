import React from 'react';
import Login from './login'
import SignUp from './SignUp'
import PersistentDrawerLeft from './PersistentDrawerLeft'
import PasswordForgot from './passwordForgot'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bf360c',
    },
    secondary: {
      main: '#d84315',
    },
  },
});

export default function App(){
    const [islogin, setIslogin] =React.useState("notRegistered");
    const [statu, setStatu]=React.useState('notRegistered');
    const [editCompte,setEditCompte] =React.useState(false);
    const [email, setEmail] =React.useState('')
    const login =(val,Email)=>{
        console.log(val);
        setEmail(Email)
        if(val==="Administrateur" || val==="SuperAdmin"){
            setEditCompte(true)
            
          }
        if(val==="notRegistered"){
            alert("The email address or password is incorrect");
        }
        setIslogin(val);
    }
    const signup =()=>{
        setIslogin("signUp");
    }
    const signin =()=>{
        setIslogin("notRegistered");
    }
    const passwordforgot =()=>{
        setIslogin("passwordforgot");
    }
    return (
        <ThemeProvider theme={theme}>
        <div>
           {islogin ==="signUp" && <SignUp login={signin} setLogin ={login}/>}
           {islogin ==="passwordforgot" && <PasswordForgot login={signin} setLogin ={login} setSignUp ={signup}/>}
           {islogin==="notRegistered" && <Login setLogin ={login} setSignUp ={signup} passwordforgot={passwordforgot}/>}
           {islogin==="Administrateur" && <PersistentDrawerLeft statu={islogin} editCompte={editCompte} email={email}/>}
           {islogin==="SuperAdmin" && <PersistentDrawerLeft statu={islogin} editCompte={editCompte} email={email}/>}
           {islogin==="Secrétaire" && <PersistentDrawerLeft statu={islogin} editCompte={editCompte} email={email}/>}
        </div>
        </ThemeProvider>
    );

}