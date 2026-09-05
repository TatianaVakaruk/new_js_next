const finishForm = () => {
    const input = document.querySelector('input');
    input.setAttribute('type', 'password');
    const login = document.createElement('input');
    login.setAttribute('name', 'login');
    login.setAttribute('type', 'text');
    const form = document.querySelector('.login-form');
    form.prepend(login);
}
finishForm();
