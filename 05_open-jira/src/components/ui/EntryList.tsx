import { Paper, List } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EnryStatus } from '../../interfaces';

interface Props {
	status: EnryStatus;
}

export const EntryList = () => {
	return (
		// Aqui haremos drop
		<div>
			<Paper
				sx={{
					height: 'calc(100vh - 250px)',
					backgroundColor: 'transparent',
					padding: 1,
				}}
			>
				<List sx={{ opacity: 1 }}>
					<EntryCard />
				</List>
			</Paper>
		</div>
	);
};
