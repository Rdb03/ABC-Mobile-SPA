let userResponses = {};

function nextQuestion(questionNumber) {
	document.getElementById(`question-${questionNumber - 1}`).style.display = 'none';
	document.getElementById(`question-${questionNumber}`).style.display = 'block';
	updateProgressBar(questionNumber);
}

function finishTest() {
	const selectedButton = document.querySelector('#question-10 .answer-checkbox:checked');
	const answer = selectedButton ? selectedButton.getAttribute('data-answer') : '';
	userResponses[`question10`] = answer;
	document.getElementById('question-10').style.display = 'none';
	document.getElementById('loading').style.display = 'flex';
	
	setTimeout(() => {
		document.getElementById('loading').style.display = 'none';
		document.getElementById('result').style.display = 'block';
		
		const resultText = `Ваши ответы:\n
  Пол: ${userResponses.question1 || 'Не указано'},\n
  Возраст: ${userResponses.question2 || 'Не указано'},\n
  Лишнее: ${userResponses.question3 || 'Не указано'},\n
  Числовой ряд: ${userResponses.question4 || 'Не указано'},\n
  Цвет: ${userResponses.question5 || 'Не указано'},\n
  Город: ${userResponses.question6 || 'Не указано'},\n
  Фигура: ${userResponses.question7 || 'Не указано'},\n
  Привычка: ${userResponses.question8 || 'Не указано'},\n
  Геометрия: ${userResponses.question9 || 'Не указано'},\n
  Число: ${userResponses.question10 || 'Не указано'}`;
		
		document.getElementById('user-result').innerText = resultText;
		updateProgressBar(10);
		
		document.querySelector('.header-text').innerText = 'ГОТОВО!';
	}, 2000);
}

document.querySelectorAll('.answer-checkbox').forEach(checkbox => {
	checkbox.addEventListener('change', function() {
		const questionId = this.closest('.question').id;
		const questionNumber = questionId.split('-')[1];
		const nextButton = document.getElementById(`next-button-${questionNumber}`) || document.getElementById('finish-button');
		if (nextButton) {
			nextButton.disabled = false;
		}
		const answer = this.getAttribute('data-answer');
		userResponses[`question${questionNumber}`] = answer;
	});
});

document.querySelectorAll('.color-option, .figure-option').forEach(option => {
	option.addEventListener('click', function() {
		const questionId = this.closest('.question').id;
		const nextButton = document.getElementById(`next-button-${questionId.split('-')[1]}`) || document.getElementById('finish-button');
		if (nextButton) {
			nextButton.disabled = false;
		}
		document.querySelectorAll(`#${questionId} .color-option, #${questionId} .figure-option`).forEach(opt => opt.classList.remove('selected'));
		this.classList.add('selected');
		const answer = this.getAttribute('data-answer');
		userResponses[`question${questionId.split('-')[1]}`] = answer;
	});
});

function updateProgressBar(step) {
	const progress = (step / 10) * 100;
	document.getElementById('progress-bar-fill').style.width = `${progress}%`;
}

document.querySelector('.result-call-block').addEventListener('click', function() {
	const resultCallDiv = document.querySelector('.result-call-block');
	fetch('https://swapi.dev/api/people/1/')
		.then(response => response.json())
		.then(data => {
			const callResultDiv = document.createElement('div');
			callResultDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>Height: ${data.height}</p>
                <p>Mass: ${data.mass}</p>
                <p>Hair Color: ${data.hair_color}</p>
                <p>Skin Color: ${data.skin_color}</p>
                <p>Eye Color: ${data.eye_color}</p>
                <p>Birth Year: ${data.birth_year}</p>
                <p>Gender: ${data.gender}</p>
            `;
			resultCallDiv.insertAdjacentElement('afterend', callResultDiv);
		})
		.catch(error => {
			console.error('Error:', error);
			const callResultDiv = document.createElement('div');
			callResultDiv.innerHTML = `<p>Произошла ошибка при загрузке данных.</p>`;
			resultCallDiv.insertAdjacentElement('afterend', callResultDiv);
		});
});
