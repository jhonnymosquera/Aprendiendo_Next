/**
 *
 */
export interface Entry {
	_id: string;
	description: string;
	createAt: number;
	status: EnryStatus;
}

export type EnryStatus = "pendig" | "in-progress" | "completed";
