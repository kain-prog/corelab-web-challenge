import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { AuthContextProvider } from './contexts/AuthContext';
import Home from './pages/Home/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<AuthContextProvider >
			<Header />
			<Routes>
		
				<Route path="/" element={<Home/>} />
			</Routes>
		</AuthContextProvider>
	</BrowserRouter>
);