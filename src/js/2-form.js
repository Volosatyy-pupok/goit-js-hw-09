const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state'

let formData = { email: "", message: ""}

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
};

form.addEventListener('input', onInput)

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('submit', onSumbit);

function onSumbit(event) {
    event.preventDefault()
    if (!formData.email || !formData.message) {
        alert("«Fill please all fields»");
        return;
    }
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: ""}
}