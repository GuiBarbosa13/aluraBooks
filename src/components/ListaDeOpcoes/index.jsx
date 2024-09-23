import styled from 'styled-components';

const linksNavBar = [ 'CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE' ];

const ListaEstilizada = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 0;
`

const ItemDeListaEstilizado = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 100%;
  cursor: pointer;
  font-size: 1em;
`

export default function ListaOpcoes (){
    return(
        <ListaEstilizada>
          { linksNavBar.map(link => <ItemDeListaEstilizado key={link}><p>{link}</p></ItemDeListaEstilizado>) }
        </ListaEstilizada>
    )
}