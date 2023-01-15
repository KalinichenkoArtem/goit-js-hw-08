var throttle = require('lodash.throttle');

console.log(throttle);

const refs = {
    form: document.querySelector("form"),
    textarea: document.querySelector("textarea"),
};

console.log(refs);

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", onTextareaInput);