import React, { useState } from 'react'
import PropTypes from 'prop-types'
const ProfilCizelge = () => {
    const prof = JSON.parse(localStorage.getItem('user')) === null ? {userName:'',bmi:[]}: JSON.parse(localStorage.getItem('user'))
    const [regUser , setRegUser] = useState(),  [user,] = useState(prof)
    function profilOlustur(){
        let profile = JSON.stringify({userName:regUser,bmi:[]})
        localStorage.setItem("user",profile)
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
                    <h1>Tüm Vücut Kitle İndeksi Değerlerin {user.userName}</h1>
                    <ol>
                        {user.bmi.map(num=> <li key={Math.random+user.userName+num+""+Math.random}>{num}</li>  )}
                    </ol>
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