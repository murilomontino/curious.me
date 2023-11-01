import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Header } from './components';
import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom, Home, NewRoom, NotFound, Room } from './pages';
import usePersistedState from './utils/hooks/usePersistedState';

import GlobalStyle from './styles/global';
import { dark, light } from './styles/themes';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Switch>
          <AuthContextProvider>
            <Switch>
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />

              <Route path="/" exact component={Home} />

              <Route path="/admin/rooms/:id" component={AdminRoom} />
              <Route path="*" component={NotFound} />
            </Switch>
          </AuthContextProvider>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
