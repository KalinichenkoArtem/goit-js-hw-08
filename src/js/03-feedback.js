import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const onFormInput = (e) => {
    formData.email = email.value;
    formData.message = message.value;
    return localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
};

const onFormSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.clear();
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));