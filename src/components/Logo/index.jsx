import Logotipo from '../../assets/logo.svg';
import styled from 'styled-components';

const ContainerLogo = styled.div`
    display: flex;
    gap: 10px;
`

const ImagemEstilizada = styled.img`
    width: 100%;
`

const ParagrafoEstilizado = styled.p`
    font-size: 30px;
`

export default function Logo() {
    return (
        <ContainerLogo>
            <ImagemEstilizada src={Logotipo} alt="Logo Alura Books" />
            <ParagrafoEstilizado><strong>Alura</strong>Books</ParagrafoEstilizado>
        </ContainerLogo>
    )
}