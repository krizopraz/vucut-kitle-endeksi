import { React } from "react";
import styled from "styled-components";
const BmiNedir = () => {
    return(<Content>
        <h1>Vücutt Kütle İndeksi Nedir?</h1>
        <br />
        <p>
        Vücut kitle indeksi, vücut kütlesinin, uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. İdeal ağırlık ise ulaşılmak istenen VKİ&#39; nin, boy uzunluğunun karesi ile çarpılmasıyla elde edilir. 
        </p>
    </Content>)
}

const Content = styled.article`
    padding: 4em;
    display:grid;
    place-content:center;
    height:100%;
    width:100%;
    border:solid .42em;;
    text-align:center;
`
export default BmiNedir