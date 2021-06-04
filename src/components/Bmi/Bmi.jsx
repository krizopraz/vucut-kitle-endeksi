import BmiHesapla from './BmiHesapla'
import BmiNedir from './BmiNedir'
import React from 'react'
import styled from 'styled-components'
const Bmi = ()=>{
    return (
        <Section>
            <BmiHesapla/>
            <BmiNedir/>
        </Section>
    )
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