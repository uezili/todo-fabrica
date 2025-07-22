import { useState } from 'react';
import { ToDoEditItem } from '../ToDoItemEdit/index';

import './styles.css';

export const ModalEdit = ({ todo }) => {
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
		<div className="flex justify-center">
			<button
				className="edit-button"
				title="Edição de tarefa"
				onClick={openModal}
			/>

			{isOpen && (
				<div className="modal-edit">
					<div className="modal-content">
						<ToDoEditItem
							todo={todo}
							onAfterSubmit={() => setIsOpen(false)}
							onCloseModal={() => setIsOpen(false)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
