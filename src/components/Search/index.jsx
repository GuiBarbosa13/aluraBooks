import styled from "styled-components";
import Input from "../Input";

const FormEstilizado = styled.form`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const TituloEstilizado = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubtituloEstilizado = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

export default function Search(){
    return(
        <FormEstilizado>
            <TituloEstilizado>Já sabe por onde começar?</TituloEstilizado>
            <SubtituloEstilizado>Encontre seu livro em nossa estante</SubtituloEstilizado>
            <Input type={'text'} placeholder={'Encontre sua próxima leitura'}/>
        </FormEstilizado>
    )
}