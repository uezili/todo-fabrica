import { useState } from 'react';
import './styles.css';
import { Cross } from '../IconsComponents/cross';
import { Calendar } from '../IconsComponents/calendar';
import { formatDate, levelIcon } from '../../helpers';

export const ModalDescription = ({ todo }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		if (isOpen == true) {
			setIsOpen(false);
			() => openModal;
		} else {
			setIsOpen(true);
		}
	};

	return (
		<div>
			<button
				className="button-description"
				title="Descrição"
				onClick={openModal}
			>
				Descrição
			</button>

			{isOpen && (
				<div className="modal-description">
					<div className="flex justify-end">
						<button onClick={openModal}>
							<Cross />
						</button>
					</div>
					<div className="modal-content">
						<h1>{todo.title}</h1>

						<p className="pt-10">{todo.description}</p>
					</div>
					<div className="date-data absolute bottom-0 right-0 px-10 pb-6">
						<div className="flex items-center">
							<Calendar className="mr-3" />
							<span>{formatDate(todo.dueDate)}</span>
						</div>

						<span title={'Prioridade: ' + todo.priority}>
							{levelIcon(todo.priority)}
							{todo.priority}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};
