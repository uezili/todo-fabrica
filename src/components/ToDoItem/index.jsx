import { Calendar } from '../IconsComponents/calendar';
import { ModalEdit } from '../Modals/ModalEdit';
import { ModalDelete } from '../Modals/ModalDelete';
import { Select } from '../Select';
import './styles.css';
import { useDispatch } from 'react-redux';
import { completeTodo, updateTodo } from '../../actions/toDoActions';
import { ModalDescription } from '../Modals/ModalDescription';
import { formatDate, levelIcon } from '../../helpers';

export const ToDoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleStatusChange = (currentStatus) => {
		const newStatus = currentStatus;
		dispatch(updateTodo(todo.id, { status: newStatus }));
		dispatch(completeTodo(todo.id));
	};

	return (
		<div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
			<div>
				{todo && (
					<p className={`title-data pt-0 text-xl truncate`}>{todo.title}</p>
				)}
			</div>

			<div className="container-information">
				<div className="date-data">
					<div className="flex justify-between items-center">
						<Calendar className="mr-3" />
						<span>{formatDate(todo.dueDate)}</span>
					</div>

					<span className="pr-1.5" title={'Prioridade: ' + todo.priority}>
						{todo.priority}
						{levelIcon(todo.priority)}
					</span>
				</div>

				<div className="flex justify-between mb-3">
					<ModalDescription todo={todo} />
					<div className="flex">
						<ModalEdit todo={todo} className="mr-2 flex" />
						<ModalDelete todo={todo} />
					</div>
				</div>
				<Select
					label="Status"
					value={todo.status}
					onChange={handleStatusChange}
					options={['Aguardando', 'Em andamento', 'Concluido']}
				/>
			</div>
		</div>
	);
};
