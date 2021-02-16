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
});