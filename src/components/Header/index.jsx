import styled from 'styled-components';
import ListaIcons from '../ListaDeIcons';
import ListaOpcoes from '../ListaDeOpcoes';
import Logo from '../Logo';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
`

export default function Header() {
    return (
        <header>
            <NavContainer>
                <Logo />
                <ListaOpcoes />
                <ListaIcons />
            </NavContainer>
        </header>
    )
}