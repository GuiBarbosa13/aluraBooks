import styled from 'styled-components';
import livros from '../../data/livros.json';
import Titulo from '../Titulo';

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const ImagensContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 48px;
    flex-wrap: wrap;
`
const LivroContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`
const ImagemEstilizada = styled.img`
    transition: filter 0.3s ease-in-out;
    width: 256px;

    &:hover{
        filter: brightness(20%);
    }

    &:hover + h3 {
        display: block;
    }
`
const SubtituloEstilizado = styled.h3`
    display: none;
    position: absolute;
    max-width: 128px;
    text-align: center;
    pointer-events: none;
    color: #FFF;
`

export default function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo cor='#EB9B00' background='#FFF'>Últimos Lançamentos</Titulo>
            <ImagensContainer>
                {livros.map(
                    livro =>
                        <LivroContainer key={livro.id}>
                            <ImagemEstilizada  src={livro.caminhoImagemCapa} alt={livro.titulo} />
                            <SubtituloEstilizado >{livro.titulo}</SubtituloEstilizado>
                        </LivroContainer>
                )}
            </ImagensContainer>
        </LancamentosContainer>
    )
}