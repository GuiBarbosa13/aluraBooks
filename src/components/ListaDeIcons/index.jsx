import styles from './ListaDeIcons.module.css';
import LogoPerfil from '../../assets/perfil.svg';
import LogoSacola from '../../assets/sacola.svg';

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

export default function ListaIcons (){
    return(
        <ul className={styles.lista}>
          { iconsNavBar.map((link, index) => <li key={index} className={styles.lista__item}><img src={link.src} alt={link.alt}/></li>) }
        </ul>
    )
}