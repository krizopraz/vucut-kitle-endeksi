import React from "react";
import { useState } from "react";
import styled from "styled-components";

const BmiHesapla =() =>{
    const [height, setHeight] = useState(0), [weight,setWeight] = useState(0), [bmi , setBmi] = useState(0), [klasman, setKlasman] = useState({})
    function calculateBmi(){
        let calculated = weight/(height**2/100**2)
        setBmi(calculated)
        if(calculated<18.5){
            setKlasman({ad:"Düşük Kilolu",color:"lightblue"})
        }else if(calculated<24.9){
            setKlasman({ad:"Normal Kilolu",color:"green"})
        }else if(calculated<29.9){
            setKlasman({ad:"Fazla Kilolu",color:"gold"})
        }else if(calculated<34.9){
            setKlasman({ad:"1. sınıf Obez",color:"orange"})
        }else if(calculated<44.9){
            setKlasman({ad:"2. sınıf Obez ",color:"orangered"})
        }else{
            setKlasman({ad:"3. sınıf Obez ",color:"firebrick"})
        }
    }
    return(
        <Container>
            <div>
            <Sec>
                <label htmlFor="kilo">Kilo giriniz(kg)</label><br />
                <Input min='1' onChange={e => setWeight(e.target.value)} value={weight} placeholder='kg' type="number" name="kilo" id="kilo" />
            </Sec>
            <Sec>
                <label htmlFor="boy">Boy giriniz(cm)</label><br />
                <Input min='1' onChange={e => setHeight(e.target.value)} value={height}  placeholder='cm' type="number" name="boy" id="boy" />
            </Sec>
            <Button onClick={calculateBmi}>Hesapla</Button>
            </div>
            {bmi =='0' ? '' : (<div>
                <span>Sonuç: <strong>{bmi}</strong> </span><br/>
                <Belirtec color={klasman.color} >{klasman.ad}</Belirtec>
            </div>)}

        </Container>
    )
}
const Container = styled.article`
    display:grid;
    place-content:center;
    font-size:1.4rem;
    flex-direction:column;
    padding:4em;
    grid-template-columns:1fr 1fr;
    gap:2em;
    height:100%;
    width:100%;
    border:.3em black solid;
`
const Belirtec = styled.span`
    color: ${props =>props.color};
`
const Sec = styled.div`
    margin-bottom:1em;
`
const Button = styled.button`
    width:100%;
    font-size:1em;
    text-transform:uppercase;
`
const Input = styled.input`font-size:1em;width:100%;`
export default BmiHesapla