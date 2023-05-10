import { Button, Box, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/ControlPoint';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '@/Context/entries';
import { UIContext } from '@/Context/ui';

export const NewEntry = () => {
	const { addNewEntry } = useContext(EntriesContext);
	const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

	const [inputValue, setInputValue] = useState('');
	const [touched, setTouched] = useState(false);

	const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	function reset() {
		setTouched(false);
		setInputValue('');
		setIsAddingEntry(false);
	}

	const onSave = () => {
		if (inputValue.length === 0) return;

		addNewEntry(inputValue);

		reset();
	};

	const onCancel = () => reset();

	return (
		<Box sx={{ marginBottom: 2, paddingX: 1 }}>
			{isAddingEntry ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 2, transition: 'all 1s' }}
						placeholder="Nueva entradas"
						autoFocus
						multiline
						label="Nueva entradas"
						helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
						error={inputValue.length <= 0 && touched}
						value={inputValue}
						onChange={onTextFieldChange}
						onBlur={() => setTouched(true)}
					/>

					<Box display="flex" justifyContent={'space-between'}>
						<Button variant="text" onClick={onCancel}>
							Cancelar
						</Button>

						<Button
							onClick={onSave}
							variant="outlined"
							color="secondary"
							endIcon={<SaveIcon />}
						>
							Guardar
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<AddIcon />}
					fullWidth
					variant="outlined"
					onClick={() => setIsAddingEntry(true)}
					sx={{ transition: 'all 1s' }}
				>
					Agregar Tarea
				</Button>
			)}
		</Box>
	);
};
