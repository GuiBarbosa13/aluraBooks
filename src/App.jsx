import Header from './components/Header';
import styled from 'styled-components';
import Search from './components/Search';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`
  max-width: 100vw;
  box-sizing: border-box;
`

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Search/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}
