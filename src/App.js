import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import RoutesList from './RoutesList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Container>
				<CssBaseline />
				<BrowserRouter>
					<Nav />
					<RoutesList />
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
}

export default App;
