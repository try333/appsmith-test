export default {
	getFilteredTickets: () => {
		const allTickets = getSupportTickets.data;
		let filteredTasks = allTickets;

		if (sel_status.selectedOptionValue.length > 0) {
			filteredTasks = filteredTasks.filter(t => t.status === sel_status.selectedOptionValue);
		}

		if (sel_sort.selectedOptionValue === 'newest') {
			return filteredTasks.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
		} else if (sel_sort.selectedOptionValue === 'oldest') {
			return filteredTasks.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
		}

		return filteredTasks;
	},
	
	handleReset: async () => {
		resetWidget('sel_sort');
		resetWidget('sel_status');
		await getSupportTickets.run();
		this.getFilteredTickets();
	},
}