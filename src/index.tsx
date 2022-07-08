import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './contexts/AuthContext';
import Home from './pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<AuthContextProvider >
		<Home/>
	</AuthContextProvider>
);