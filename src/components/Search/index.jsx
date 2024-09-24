import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import livros from "../../data/livros.json";
import Titulo from "../Titulo";

const FormEstilizado = styled.form`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`
const SubtituloEstilizado = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const LivrosPesquisadosContainerEstilizado = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 32px;
    flex-wrap: wrap;
`

const ImagemEstilizada = styled.img`
    width: 100%;
`

const DivLivroEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    width: 128px;
    border: #FFF 1px solid;

    &:hover{
        transform: translateY(-10px);
    }
`

export default function Search() {
    const [livroPesquisado, setLivroPesquisado] = useState([]);

    return (
        <FormEstilizado onSubmit={e => e.preventDefault()}>
            <Titulo cor="#FFF">Já sabe por onde começar?</Titulo>
            <SubtituloEstilizado>Encontre seu livro em nossa estante</SubtituloEstilizado>
            <Input
                type={'text'}
                placeholder={'Encontre sua próxima leitura'}
                onChange={(e) => {
                    const textoDigitado = e.target.value != "" ? e.target.value.toLowerCase() : null;
                    const resultado = livros.filter(livro => livro.titulo.toLocaleLowerCase().includes(textoDigitado));
                    setLivroPesquisado(resultado);
                }}
            />

            <LivrosPesquisadosContainerEstilizado>
                {livroPesquisado.map(
                    livro => 
                    <DivLivroEstilizada>
                        <ImagemEstilizada src={livro.caminhoImagemCapa} alt={livro.titulo} key={livro.id} />
                        <p>{livro.titulo}</p>
                    </DivLivroEstilizada>
                )}
            </LivrosPesquisadosContainerEstilizado>

        </FormEstilizado>
    )
}