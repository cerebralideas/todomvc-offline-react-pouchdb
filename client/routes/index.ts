import page from 'page';

function init(): void {
	page('/', () => {});
	page('/show_all', () => {});
	page('/show_active', () => {});
	page('/show_completed', () => {});
	page();
}

export default init;
