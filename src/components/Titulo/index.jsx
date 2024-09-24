import styled from "styled-components";



export default function Titulo({ cor = '#000', background = 'transparent', children }) {

    const TituloEstilizado = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${background};
    font-size: 36px;
    color: ${cor};
    text-align: center;
    margin: 0;
    `

    return (
        <TituloEstilizado>{children}</TituloEstilizado>
    )
}