import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../actions/toDoActions';

import './styles.css';

export const ModalDelete = ({ todo }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
	};

	const openModal = () => {
		if (isOpen == true) {
			setIsOpen(false);
			() => openModal;
		} else {
			setIsOpen(true);
		}
	};

	return (
		<div className="flex justify-center">
			<button
				className="delete-button"
				title="Deletar tarefa"
				onClick={openModal}
			/>

			{isOpen && (
				<div className="modal">
					<div className="modal-content">
						<p className="font-bold">
							Você tem certeza que deseja excluir a tarefa:
						</p>
						<p className="todo-title">{todo.title}</p>
						<div className="grid grid-cols-2 gap-2">
							<button
								className="button-canceled-primary"
								onClick={handleDelete}
							>
								Sim
							</button>
							<button className="button-secondary" onClick={openModal}>
								Não
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
