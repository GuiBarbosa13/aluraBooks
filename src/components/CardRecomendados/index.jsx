import styled from "styled-components";
import Titulo from "../Titulo";

const CardContainer = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    width: 70%;
    border-radius: 16px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.30);
    padding: 32px;
`

const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`

const BotaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 20%;
    gap: 4px;
`

const ImagemEstilizada = styled.img`
    min-width: 100%;
`

const BotaoEstilizado = styled.button`
    background-color: #EB9B00;
    border: none;
    padding: 8px;
    min-width: 100%;
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: #b87a00;
    }
`

export default function CardRecomendados({ titulo, descricao, src }) {
    return (
        <CardContainer>
            <TextoContainer>
                <Titulo align="start" cor="#EB9B00" fontSize="28 px">Talvez você se interesse por...</Titulo>
                <h4>{titulo}</h4>
                <p>{descricao}</p>
            </TextoContainer>
            <BotaoContainer>
                <ImagemEstilizada src={src} alt={titulo} />
                <BotaoEstilizado><strong>Saiba mais</strong></BotaoEstilizado>
            </BotaoContainer>
        </CardContainer>
    )
}