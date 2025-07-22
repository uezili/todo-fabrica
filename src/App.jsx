import { Provider } from 'react-redux';
import { ToDoApp } from './components/ToDoApp';
import { store } from './store/store';

export default function App() {
	return (
		<Provider store={store}>
			<ToDoApp />
		</Provider>
	);
}
