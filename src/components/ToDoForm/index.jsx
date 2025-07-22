import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/toDoActions';
import { Plus } from '../IconsComponents/plus';
import { Select } from '../Select';

export const ToDoForm = ({ onAfterSubmit }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [priority, setPriority] = useState(null);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(title, description, dueDate, priority));
		setTitle('');
		setDescription('');
		setDueDate('');
		setPriority(null);
		onAfterSubmit();
	};

	return (
		<>
			<div className="flex justify-center font-bold">
				<h1 className="tile-page text-2xl">Adicionar nova tarefa</h1>
			</div>
			<form
				className="grid grid-cols-2 gap-x-8 gap-y-6"
				onSubmit={handleSubmit}
			>
				<div>
					<div>
						<label>
							Titulo:
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								type="text"
								id="title"
								required
							/>
						</label>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<label>
								Data:
								<input
									type="date"
									required
									value={dueDate}
									onChange={(e) => setDueDate(e.target.value)}
								/>
							</label>
						</div>
						<label>
							Prioridade:
							<Select
								label="Prioridade"
								id="priority"
								value={priority}
								onChange={setPriority}
								options={['Baixa', 'Média', 'Alta']}
							/>
						</label>
					</div>
					<div>
						<button className="button-submit" type="submit">
							Add nova tarefa <Plus />
						</button>
					</div>
				</div>
				<div>
					<label>
						Descrição:
						<textarea
							className="description"
							required
							style={{ width: '100%' }}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</label>
				</div>
			</form>
		</>
	);
};
