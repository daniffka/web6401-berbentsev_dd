class TrainingRequest {
    constructor(name, email, phone, tariff, date, time, agree) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.tariff = tariff;
        this.date = date;
        this.time = time;
        this.agree = agree;
    }

    print() {
        console.log('Новая заявка');
        console.log(`Имя:        ${this.name}`);
        console.log(`Email:      ${this.email}`);
        console.log(`Телефон:    ${this.phone}`);
        console.log(`Абонемент:  ${this.tariff}`);
        console.log(`Дата:       ${this.date}`);
        console.log(`Время:      ${this.time}`);
        console.log(`Согласие:   ${this.agree ? 'да' : 'нет'}`);
    }
}

const form = document.getElementById('signup-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const request = new TrainingRequest(
        document.getElementById('name').value,
        document.getElementById('email').value,
        document.getElementById('phone').value,
        document.getElementById('tariff').value,
        document.getElementById('date').value,
        document.querySelector('input[name="time"]:checked').value,
        document.getElementById('agree').checked,
    );

    request.print();

    message.textContent = `Спасибо, ${request.name}! Заявка отправлена.`;
    form.reset();
});
