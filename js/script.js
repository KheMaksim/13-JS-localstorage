const note = document.querySelector('#notebook');
const loginArea = document.querySelector('#username');
const textArea = document.querySelector('.area');

if (localStorage.getItem(loginArea.value)) {
	note.value = localStorage.getItem(loginArea.value);
	textArea.style.display = 'flex';
	document.querySelector('form').style.display = 'none';
}

const formSubmit = document
	.querySelector('form')
	.addEventListener('submit', (event) => {
		event.preventDefault();
		let log = localStorage.getItem(loginArea.value);
		note.value = log;
		if (log === null || log.length === 0) log = loginArea.value;
		textArea.style.display = 'flex';
	});

const saveBtn = document
	.querySelector('#save')
	.addEventListener('click', () => {
		localStorage.setItem(loginArea.value, note.value);
	});
document.addEventListener('keydown', function (e) {
	if (e.key === 's' && e.ctrlKey) {
		e.preventDefault();
		localStorage.setItem(loginArea.value, note.value);
	}
});
const resetBtn = document
	.querySelector('#reset')
	.addEventListener('click', () => {
		note.value = '';
		localStorage.setItem(loginArea.value, '');
	});

const logoutBtn = document
	.querySelector('#logout')
	.addEventListener('click', () => {
		localStorage.setItem(loginArea.value, note.value);
		loginArea.value = '';
		textArea.style.display = 'none';
		document.querySelector('form').style.display = 'flex';
		location.reload();
	});