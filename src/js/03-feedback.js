import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData.email = email.value;
    formData.message = message.value;
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();

    if (!email.value || !message.value) {
    return alert("Усі поля повинні бути заповнені!");
  };
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};

populateTextarea();

function populateTextarea() {
    const loadData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    const formKeys = Object.keys(loadData);
    formKeys.map(element => {
        document.querySelector(`[name='${element}']`).value = loadData[element];
    });
};