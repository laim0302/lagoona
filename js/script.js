window.addEventListener('DOMContentLoaded', function () {

	//---------------------------------------
	// БУРГЕР-МЕНЮ
	// document.querySelector('.burger-icon').addEventListener('click', function () {
	// 	document.querySelector('.nav-mobil').classList.toggle('nav-mobil_ative');
	// 	document.querySelector('.burger-icon_open').classList.toggle('burger-icon_close');
	// });
	//---------------------------------------



	//------------------------------------------------------
	// МОДАЛЬНОЕ ОКНО "ЗАКАЗАТЬ ЗВОНОК"

	var btnCallRequest = document.querySelectorAll('.btn__call-request'),  // Кнопка вызова окна
		modalContainer = document.querySelector('.modal-container'),  // Подложка и само окно
		modalWindow = document.querySelector('.modal-window'),  // Само окно
		btnClose = document.querySelector('.modal-window__btn-close'),  // Кнопка закрытия окна без отправки данных
		btnSend = document.querySelector('.form__btn'),  // Кнопка отправки данных формы
		messageSent = document.querySelector('.message-sent'),  // Сообщение об отправке данных
		btnMessageSent = document.querySelector('.message-sent__btn'),  // Кнопка ОК
		formName = document.getElementById('form__name'), // Поле ввода "Имя"
		formPhone = document.getElementById('form__phone');  // Поле ввода "Телефон"

	// Вызов окна
	btnCallRequest.forEach(function (button) {
		button.addEventListener('click', function (event) {
			// event.preventDefault();
			// console.log(this.innerHTML);
			modalContainer.classList.toggle('modal-container_active');
		})
	});

	// Закрытие окна без отправки данных
	btnClose.addEventListener('click', function () {
		modalContainer.classList.toggle('modal-container_active');
	});

	// Отправка данных "Заказать звонок"
	btnSend.addEventListener('click', function (event) {
		if (formName.value.length !== 0 && formPhone.value.length !== 0) {
			modalWindow.classList.toggle('modal-window_close');
			messageSent.classList.toggle('message-sent_active'); //  Открытие окна "Сообщение отправлено"
			// console.log(formName.value.length);
			// console.log(formPhone.value.length);
		};
	});

	// Закрытие модального окна "Заказать звонок" после отправки данных
	btnMessageSent.addEventListener('click', function () {
		modalWindow.classList.toggle('modal-window_close');
		messageSent.classList.toggle('message-sent_active');
		modalContainer.classList.toggle('modal-container_active');
	});
	//------------------------------------------------------
});