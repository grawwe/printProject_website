const questions = [
    {
        question: "Какой процесс происходит на первом этапе электрофотографии?",
        optionA: "Зарядка фоторецептора",
        optionB: "Нейтрализация фоторецептора",
        optionC: "Закрепление изображения",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Какая технология используется для формирования скрытого изображения?",
        optionA: "Ультрафиолетовые лампы",
        optionB: "Солнечные батареи",
        optionC: "Лазеры или светодиоды",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какие силы притягивают тонер к бумаге на этапе переноса?",
        optionA: "Гравитационные силы",
        optionB: "Электростатические силы",
        optionC: "Магнитные поля",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что происходит с поверхностью фоторецептора при воздействии света?",
        optionA: "Нейтрализация заряда",
        optionB: "Снятие защитного слоя",
        optionC: "Увеличение толщины фоторецептора",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Как называется устройство, создающее коронный разряд на этапе зарядки?",
        optionA: "Электрон",
        optionB: "Мегатрон",
        optionC: "Коротрон",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Покрытие из какого материала фоторецептора обладает высокой устойчивостью к истиранию?",
        optionA: "Полимер",
        optionB: "Аморфный кремний",
        optionC: "Алюминий",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Какой метод чаще всего используется для закрепления тонера на бумаге?",
        optionA: "Клейкой лентой",
        optionB: "Лазерный",
        optionC: "Термосиловой",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какая технология используется для транспортировки частиц тонера в двухкомпонентной системе?",
        optionA: "Электрические щетки",
        optionB: "Магнитные кисти",
        optionC: "Воздушные насосы",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Для чего используется фьюзерное масло на этапе закрепления?",
        optionA: "Для предотвращения прилипания тонера к валику",
        optionB: "Для увеличения проводимости тонера",
        optionC: "Для охлаждения бумаги",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что происходит на этапе очистки фоторецептора?",
        optionA: "Полировка фоторецептора",
        optionB: "Удаление бумаги",
        optionC: "Удаление остаточного тонера и нейтрализация зарядов",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что происходит при прямой термографии?",
        optionA: "Изменение цвета материала под воздействием тепла",
        optionB: "Печать через нанесение краски с ленты",
        optionC: "Охлаждение материала для изменения цвета",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Чем отличается термоперенос от прямой термографии?",
        optionA: "Тонер переносится с носителя на материал",
        optionB: "Тепло применяется только к бумаге",
        optionC: "Краска впитывается через воду",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },
    
    {
        question: "Какой процесс характерен для термосублимации?",
        optionA: "Переход краски из твердой фазы в газообразную",
        optionB: "Переход краски из жидкой фазы в твердую",
        optionC: "Замерзание краски на носителе",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что используется в термопереносе для передачи изображения?",
        optionA: "Механическая кисть",
        optionB: "Термоголовка",
        optionC: "Лазерный сканер",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Как можно контролировать количество краски при термопереносе?",
        optionA: "Используя больше тонера",
        optionB: "Увеличивая скорость движения ленты",
        optionC: "Изменяя время теплового импульса",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какая технология позволяет изменять плотность точек при термосублимации?",
        optionA: "Постоянное перемешивание красок",
        optionB: "Увеличение количества бумажных слоев",
        optionC: "Регулировка температуры и времени импульса",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "В чем особенность многокрасочной термопечати?",
        optionA: "Использование только одного цветного слоя",
        optionB: "Последовательное нанесение каждого цветного слоя",
        optionC: "Нанесение всех цветов одновременно",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Какого разрешения могут достигать современные устройства термопереноса?",
        optionA: "3200 dpi",
        optionB: "120 dpi",
        optionC: "72 dpi",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Почему носители краски в термопечати не используются повторно?",
        optionA: "Они теряют красящий слой после одного использования",
        optionB: "Они ломаются после использования",
        optionC: "Они испаряются при нагреве",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Где часто применяется термосублимация?",
        optionA: "Для нанесения изображений на текстильные ткани через воду",
        optionB: "Для печати газет",
        optionC: "Для печати цифровых фотографий",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Как работает непрерывная струйная печать?",
        optionA: "Капли выбрасываются постоянно",
        optionB: "Капли выбрасываются только при необходимости",
        optionC: "Краситель наносится с помощью механической щетки",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Какой метод используется в импульсной струйной печати?",
        optionA: "Капли выбрасываются случайным образом при нагреве",
        optionB: "Капли выбрасываются, когда устройство получает команду",
        optionC: "Капли формируются постоянно,не все попадают на материал",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что делает пьезоэлектрический преобразователь в струйной печати?",
        optionA: "Генерирует тепло для плавления красителя",
        optionB: "Создает давление для выброса капель красителя",
        optionC: "Сжимает воздух для выброса краски",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Основное преимущество устройств с непрерывной подачей красителя?",
        optionA: "Мгновенное высыхание краски на бумаге",
        optionB: "Возможность печати без использования электричества",
        optionC: "Высокая скорость печати",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какие типы устройств используются для управления траекторией капель?",
        optionA: "Нагревательные пластины",
        optionB: "Механические рычаги",
        optionC: "Зарядно-отклоняющие устройства",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какой фактор ограничивает термоэлектрическую печать?",
        optionA: "Слишком высокая скорость формирования капель",
        optionB: "Невозможность контролировать размер капли",
        optionC: "Избыточное давление в соплах",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что происходит с каплями, не участвующими в печати при непрерывной струйной печати?",
        optionA: "Они сгорают при контакте с воздухом",
        optionB: "Они отклоняются в уловитель и возвращаются в резервуар",
        optionC: "Они выбрасываются за пределы принтера",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Какая скорость выброса капель в непрерывной струйной печати?",
        optionA: "До 40 м/с",
        optionB: "До 100 м/с",
        optionC: "До 5 м/с",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Какую роль играет устройство рециркуляции в струйной печати?",
        optionA: "Очищает сопла от старой краски",
        optionB: "Захватывает использованные капли для повторного нанесения",
        optionC: "Возвращает неиспользованные капли обратно",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какой недостаток у устройств с непрерывной подачей красителя?",
        optionA: "Невозможно печатать цветные изображения",
        optionB: "Капли не достигают бумаги",
        optionC: "Низкая точность позиционирования капель",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что такое коротрон?",
        optionA: "Устройство для зарядки фоторецептора",
        optionB: "Капли не достигают бумаги",
        optionC: "Робот для подачи бумаги в принтер",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое зарядка в электрофотографии?",
        optionA: "Процесс, при котором фоторецептор получает заряд",
        optionB: "Процесс, связанный с нагреванием бумаги",
        optionC: "Этап, когда принтер начинает работать сам по себе",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое термопузырьковая струйная печать?",
        optionA: "Способ печати, использующий холодные чернила",
        optionB: "Метод, при котором капли формируются за счет пузырьков",
        optionC: "Технология, спользующая дыхание для распыления чернил",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что такое фоторецептор?",
        optionA: "Прибор для автоматической подгонки бумаги",
        optionB: "Элемент, на котором создается скрытое изображение",
        optionC: "Устройство, заменяющее картриджи в принтере",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что такое термосублимационная печать?",
        optionA: "Способ переноса изображения с помощью горячего воздуха",
        optionB: "Технология, использующая только водяной пар",
        optionC: "Метод, при котором краситель преобразуется в газ",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что такое пьезоэлектрический эффект?",
        optionA: "Явление, при котором давление создает напряжение",
        optionB: "Эффект, возникающий при быстром движении бумаги в принтере",
        optionC: "Состояние, когда чернила начинают танцевать",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое непрерывная струйная печать?",
        optionA: "Метод, при котором капли выбрасываются постоянно",
        optionB: "Способ, когда капли выбрасываются только по необходимости",
        optionC: "Технология, использующая ртуть вместо чернил",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое магнитная кисть?",
        optionA: "Деревянная палочка для размешивания чернил",
        optionB: "Специальный инструмент для создания магнитных карт",
        optionC: "Устройство, используемое для контроля и переноса тонера",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что такое полимерные связующие в тонере?",
        optionA: "Специальные чернила для водяных распечаток",
        optionB: "Полимеры, обеспечивающие плавление и адгезию тонера",
        optionC: "Вещества, которые делают принтеры более красивыми",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что такое носитель в процессе электрофотографии?",
        optionA: "Материал, обеспечивающий зарядку частиц тонера и их перенос",
        optionB: "Часть принтера, которая отвечает за звук",
        optionC: "Лист бумаги, который сам понимает, что нужно напечатать",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 39) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#bbdbb4"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#f0b1ac"
            document.getElementById(correctOption).style.backgroundColor = "#bbdbb4"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 39) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 15) {
        remark = "Тебе стоит повторить материал"
        remarkColor = "#f0b1ac"
    }
    else if (playerScore >= 16 && playerScore < 35) {
        remark = "Неплохо! тебе слудет повторить материал и результат будет лучше!"
        remarkColor = "#f5d3a6"
    }
    else if (playerScore >= 35) {
        remark = "Отличная работа!"
        remarkColor = "#bbdbb4"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}