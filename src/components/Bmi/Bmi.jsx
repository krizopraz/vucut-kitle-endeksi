import BmiHesapla from './BmiHesapla'
import BmiNedir from './BmiNedir'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const Bmi = (props)=>{
    return (
        <Section>
            <BmiHesapla user={props.user} setUser={props.setUser}/>
            <BmiNedir/>
        </Section>
    )
}
Bmi.propTypes = {
    props:PropTypes.object,
    user:PropTypes.object,
    setUser:PropTypes.func
}

const Section = styled.section`
    display:grid;
    place-items:center;
    grid-template-columns:1fr 1fr;
    gap:1em;
    height:90vh;
    padding:10vh;

`
export default Bmi