import React from 'react'
import styled from 'styled-components'
import ProfilDiyet from './ProfilDiyet'
import ProfilCizelge from './ProfilCizelge'
import PropTypes from 'prop-types'
const  Profil= ({data,setUser}) =>{
    return ( 
    <Section>
        <ProfilDiyet/>
        <ProfilCizelge data={data,setUser} />
    </Section>)
}
const Section = styled.section`
    display:grid;
    place-items:center;
    grid-template-columns:1fr 1fr;
    gap:1em;
    height:90vh;
    padding:10vh;

`
Profil.propTypes = {
    data: PropTypes.object,
    setUser:PropTypes.func
}
export default Profil