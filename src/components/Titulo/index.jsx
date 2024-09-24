import styled from "styled-components";



export default function Titulo({ cor = '#000', background = 'transparent', fontSize= '36px', align='center', children }) {

    const TituloEstilizado = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${background};
    font-size: ${fontSize};
    color: ${cor};
    text-align: ${align};
    margin: 0;
    `

    return (
        <TituloEstilizado>{children}</TituloEstilizado>
    )
}