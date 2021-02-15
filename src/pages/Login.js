import './Login.css';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'


function Login() {  
  const history = useHistory()

  const routerSalao=()=>{
    history.push('/salao')
  }
  const routerRegister=()=>{
    history.push('/cadastro')
  }

  const routerCozinha=()=>{
    history.push('/cozinha')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    function loginBtn(e) {
      e.preventDefault();
      fetch('https://lab-api-bq.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body :`email=${email}&password=${password}`
        
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if(json.role === "garcom") {
            routerSalao();
          }
          if(json.role === "cozinheiro") {
            routerCozinha();
          }
        })
    };
  
    return (
      <div class="overlay">
  <form>
    <div class="con">
      <header class="head-form">
        <h2>Login</h2>
        <p>Faça o login aqui usando seu email de usuário e senha</p>
      </header>
      <div class="field-set">
        <input class="form-input" id="txt-input" type="text" placeholder="E-mail" required value={email}
          id="loginInputEmail" onChange={(event)=> setEmail(event.target.value)}/>
        <input class="form-input" type="password" placeholder="Senha" id="pwd" name="password" required value={password}
          id="loginInputPassword" onChange={(event)=> setPassword(event.target.value)} />
        <button class="btn submits login" onClick={loginBtn}>Login</button>
        <div class="other">
          <button class="btn submits sign-up" onClick={routerRegister}>Cadastro
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
    );
  }
  
  export default Login;
  

     
   