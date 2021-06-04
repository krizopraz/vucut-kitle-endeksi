import React, { useState } from 'react'
import PropTypes from 'prop-types'
const ProfilCizelge = ({user,setUser}) => {
    const [regUser , setRegUser] = useState("")
    function profilOlustur(){
        let profile = JSON.stringify({userName:regUser,bmi:[]})
        localStorage.setItem("user",profile)
        setUser({userName:regUser,bmi:[]})
    }
    return(
        <div>
            <article>
                <div>
                    <h3>Profil Oluştur</h3>
                    <label htmlFor="userName">Adınızı girerek profil oluşturabilirsiniz.</label>
                    <input type="text" onChange={e=>setRegUser(e.target.value)} value={regUser} name="userName" id="userName" />
                    <button onClick={profilOlustur}>Oluştur</button>
                </div>
            </article>
            <article>
                <div>
                    <h1>History{user}</h1>
                </div>
            </article>
        </div>

     )
}
ProfilCizelge.propTypes = {
    user:PropTypes.object,
    setUser:PropTypes.func
}

export default ProfilCizelge