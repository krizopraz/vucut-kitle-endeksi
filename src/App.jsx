import {BrowserRouter as Router , Switch , Route , NavLink} from 'react-router-dom'
import Bmi from './components/Bmi'
import Profil from './components/Profil'
import React,{ useState } from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'
function App(){
  const db = JSON.parse(localStorage.getItem('user'))
  const [user,setUser] = useState(db === null ?{userName:'',bmi:[]}:db)
  if(db === null){localStorage.setItem('user',JSON.stringify({userName:'',bmi:[]}))}
  console.log(user)
    return(
    <Router>
        <Nav>
            <h1>Vücut Kütle Endeksi Hesaplama</h1>
            { user.userName !== ''  ? <h3>Merhaba {user.userName}!</h3> : <h3>Profilden kayıt olabilirsiniz</h3> }
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
            <Bmi user={user} setUser={setUser}/>
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