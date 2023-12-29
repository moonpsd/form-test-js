const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMensage = document.querySelector('.msg');
const items = document.querySelector(".items");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailInput === '') {
        errorMensage.innerHTML = "<strong>Preecha as lacunas";
        errorMensage.classList = 'error';

        setTimeout(() => {
            errorMensage.textContent = "";
            errorMensage.classList = "";
        }, 2000);

        return;
    }



    const li = document.createElement("li")
    li.classList = "item";
    li.innerHTML = `Olá! <strong>${nameValue}</strong> seu formulário foi enviado com <font color="green">sucesso</font>. <br>Assim que o recebermos te retornaremos de imediato.`

    items.appendChild(li);
})