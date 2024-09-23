import LogoPerfil from '../../assets/perfil.svg';
import LogoSacola from '../../assets/sacola.svg';
import styled from 'styled-components';

const iconsNavBar = [
  {
    src: LogoPerfil,
    alt: 'ícone para navegar até o meu perfil'
  },
  {
    src: LogoSacola,
    alt: 'ícone para navegar até a minha sacola de comprar'
  }]
;

const ListaEstlizada = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 0;
`

const ItemDeListaEstlizado = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  font-size: 1em;
`

export default function ListaIcons() {
  return (
    <ListaEstlizada>
      {iconsNavBar.map((link, index) => <ItemDeListaEstlizado key={index}><img src={link.src} alt={link.alt} /></ItemDeListaEstlizado>)}
    </ListaEstlizada>
  )
}