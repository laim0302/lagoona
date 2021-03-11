window.addEventListener('DOMContentLoaded', function () {


	// Маскирование полей ввода
	var selector = document.querySelector("input[type='tel']");
	var im = new Inputmask("+7 (999) 999-99-99");
	im.mask(selector);

	// Валидация полей ввода
	new JustValidate('.callback__form', {
		rules: {
			name: {
				required: true,
				minLength: 2
			},
			phone: {
				required: true,
				function: (name, value) => {
					const phoneNumber = selector.inputmask.unmaskedvalue();
					return Number(phoneNumber) && phoneNumber.length === 10
				}
			},
		},
		messages: {
			name: 'Заполните поле',
			phone: 'Заполните поле'
		},
	});

	// Кастомизация селекта 
	// const city = document.querySelector('#booking-form-city');
	// const choicesCity = new Choices(city, {
	// 	searchEnabled: false
	// });

	const category = document.querySelector('#booking-form-category');
	const choicesCategory = new Choices(category, {
		searchEnabled: false
	});

	// const guestnumber = document.querySelector('#booking-form-guestnumber');
	// const choicesGuestnumber = new Choices(guestnumber, {
	// 	searchEnabled: false
	// });

	var dateIn = new Datepicker('#booking-form-datein');
	var dateOut = new Datepicker('#booking-form-dateout');


	// ЯНДЕКС-КАРТА
	let mapBtn = document.querySelectorAll('.map__btn'),
		yamapContainer = document.querySelector('.yamap__container'),
		yamapBtnClose = document.querySelector('.yamap__btn-close');

	// Вызов окна карты
	mapBtn.forEach(function (button) {
		button.addEventListener('click', function (event) {
			yamapContainer.classList.toggle('yamap__container_active');
			// var point = this.id;

			ymaps.ready(init);
			function init() {
				// alert(point);
				// alert(typeof point);

				// Создание карты.
				var myMap = new ymaps.Map("map", {
					center: [41.393004, 2.193674],
					zoom: 15
				});

				// Создание геообъекта 
				var myPlacemark = new ymaps.Placemark([41.393004, 2.193674], {}, {
					preset: 'islands#redIcon'
				});

				// Размещение геообъекта на карте.
				myMap.geoObjects.add(myPlacemark);
			}
		})
	});

	// Закрытие окна карты
	yamapBtnClose.addEventListener('click', function () {
		yamapContainer.classList.toggle('yamap__container_active')
	});







});

