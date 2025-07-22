import './styles.css';
import { useState } from "react";
import { Select } from "../Select";
import { FilterIcon } from "../IconsComponents/filter";

export const ToDoFilter = ({ onFilterChange }) => {
  const [selectedPriority, setSelectedPriority] = useState('Todas');
  const [selectedStatus, setSelectedStatus] = useState('Todas');

  const handlePriorityChange = event => {
    setSelectedPriority(event.target.value);
    onFilterChange({ priority: event.target.value, status: selectedStatus });
  };

  const handleStatusChange = event => {
    setSelectedStatus(event.target.value);
    onFilterChange({ priority: selectedPriority, status: event.target.value });
  };

  const handelResetFilters = () => {
    setSelectedStatus('Todas');
    setSelectedPriority('Todas');

    onFilterChange({ priority: 'Todas', status: 'Todas' });
  }
  return (
    <div className="select-filters">
      <label>
					Status:
					<Select
						label="Status"
						options={['Todas', 'Aguardando', 'Em andamento', 'Concluido']}
						value={selectedStatus}
						onChange={(data) =>
              handleStatusChange({
                target: { value: data, name: 'status' },
              })}
					/>
				</label>
				<label>
					Prioridade:
					<Select
						label="Prioridade"
						options={['Todas', 'Baixa', 'Média', 'Alta']}
						value={selectedPriority}
						onChange={(data) =>
              handlePriorityChange({
                target: { value: data, name: 'priority' },
              })}
					/>
				</label>
        <button onClick={handelResetFilters}>
          <FilterIcon />
        </button>
    </div>
  );
}


