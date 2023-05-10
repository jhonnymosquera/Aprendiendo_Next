import { Paper, List } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EnryStatus } from '../../interfaces';
import { DragEvent, FC, useContext, useMemo } from 'react';
import { EntriesContext } from '@/Context/entries';
import { UIContext } from '@/Context/ui';

import styles from './EntryList.module.css';

interface Props {
	status: EnryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
	const { entries, updateEntry } = useContext(EntriesContext);
	const { isDragging, endDragging } = useContext(UIContext);

	const entriesByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		[entries]
	);

	const allowDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
		const id = event.dataTransfer.getData('text');
		const entry = entries.find((e) => e._id === id)!;
		entry.status = status;

		updateEntry(entry);
		endDragging();
	};

	return (
		// Aqui haremos drop
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ''}
		>
			<Paper
				sx={{
					height: 'calc(100vh - 250px)',
					backgroundColor: 'transparent',
					padding: 1,
					overflow: 'scroll',
				}}
			>
				<List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
					{entriesByStatus.map((entry) => (
						<EntryCard key={entry._id} entry={entry} />
					))}
				</List>
			</Paper>
		</div>
	);
};
