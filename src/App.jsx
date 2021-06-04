import {BrowserRouter as Router , Switch , Route , NavLink} from 'react-router-dom'
import Bmi from './components/Bmi'
import Profil from './components/Profil'
import React,{ useEffect,useState } from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'
function App(){

  const [user,setUser] = useState({userName:null,bmi:[]})
  useEffect(()=>{
    const userMain = JSON.parse(localStorage.getItem('user'))
    if(userMain !== null){
      setUser(userMain)
    }
    [user]
  })

  const UserSection = ({user}) =>{
    if(user === null){
      console.log(user)
      return (<h4>Profil kısmından kendi profilinizi oluşturabilirsiniz !</h4>)
    }else{
      return( <h4>Merhaba {user} </h4> )
    }
  }

    return(
    <Router>
        <Nav>
            <h1>Vücut Kütle Endeksi Hesaplama</h1>
            <UserSection user={user.userName} />
          <Ul>
            <li>
              <NavLink exact activeClassName='active' to='/'>Vücüt Kütle Endeksi Hesapla</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active' to='/profil'>Profil</NavLink>
            </li>
          </Ul>
        </Nav>
        <Switch>
          <Route path='/profil'>
              <Profil  data={user} setUser={setUser} />
          </Route>
          <Route path='/'>
            <Bmi />
          </Route>
        </Switch>
      </Router>
      )
}

// Styled Componnents - Hoisting
const Nav = styled.nav`
    height:10vh;
    display:flex;
    color:black;
    text-align:center;
    justify-content:space-evenly;
    align-items:center;
    a{
      margin-right:3em;
      text-decoration:none;
      color:inherit;
    }
    a.active{
      border-bottom:solid 1px;
    }
    border-bottom:.2em solid;
`
const Ul = styled.ul`
  display:flex;
  list-style:none;
  justify-content:space-around;
  align-items:center;
  li:nth-child(first){
   margin-right:2em;
 }
`
export default App