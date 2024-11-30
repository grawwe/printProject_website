const questions = [
    {
        question: "Какой процесс происходит на первом этапе электрофотографии?",
        title: "Электрофотография",
        optionA: "Зарядка фоторецептора",
        optionB: "Нейтрализация фоторецептора",
        optionC: "Закрепление изображения",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Какая технология используется для формирования скрытого изображения?",
        title: "Электрофотография",
        optionA: "Ультрафиолетовые лампы",
        optionB: "Солнечные батареи",
        optionC: "Лазеры или светодиоды",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какие силы притягивают тонер к бумаге на этапе переноса?",
        title: "Электрофотография",
        optionA: "Гравитационные силы",
        optionB: "Электростатические силы",
        optionC: "Магнитные поля",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что происходит с поверхностью фоторецептора при воздействии света?",
        title: "Электрофотография",
        optionA: "Нейтрализация заряда",
        optionB: "Снятие защитного слоя",
        optionC: "Увеличение толщины фоторецептора",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Как называется устройство, создающее коронный разряд на этапе зарядки?",
        title: "Электрофотография",
        optionA: "Электрон",
        optionB: "Мегатрон",
        optionC: "Коротрон",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Покрытие из какого материала фоторецептора обладает высокой устойчивостью к истиранию?",
        title: "Электрофотография",
        optionA: "Полимер",
        optionB: "Аморфный кремний",
        optionC: "Алюминий",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Какой метод чаще всего используется для закрепления тонера на бумаге?",
        title: "Электрофотография",
        optionA: "Клейкой лентой",
        optionB: "Лазерный",
        optionC: "Термосиловой",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какая технология используется для транспортировки частиц тонера в двухкомпонентной системе?",
        title: "Электрофотография",
        optionA: "Электрические щетки",
        optionB: "Магнитные кисти",
        optionC: "Воздушные насосы",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Для чего используется фьюзерное масло на этапе закрепления?",
        title: "Электрофотография",
        optionA: "Для предотвращения прилипания тонера к валику",
        optionB: "Для увеличения проводимости тонера",
        optionC: "Для охлаждения бумаги",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что происходит на этапе очистки фоторецептора?",
        title: "Электрофотография",
        optionA: "Полировка фоторецептора",
        optionB: "Удаление бумаги",
        optionC: "Удаление остаточного тонера и нейтрализация зарядов",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что происходит при прямой термографии?",
        title: "Термографическая печать",
        optionA: "Изменение цвета материала под воздействием тепла",
        optionB: "Печать через нанесение краски с ленты",
        optionC: "Охлаждение материала для изменения цвета",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Чем отличается термоперенос от прямой термографии?",
        title: "Термографическая печать",
        optionA: "Тонер переносится с носителя на материал",
        optionB: "Тепло применяется только к бумаге",
        optionC: "Краска впитывается через воду",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },
    
    {
        question: "Какой процесс характерен для термосублимации?",
        title: "Термографическая печать",
        optionA: "Переход краски из твердой фазы в газообразную",
        optionB: "Переход краски из жидкой фазы в твердую",
        optionC: "Замерзание краски на носителе",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что используется в термопереносе для передачи изображения?",
        title: "Термографическая печать",
        optionA: "Механическая кисть",
        optionB: "Термоголовка",
        optionC: "Лазерный сканер",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Как можно контролировать количество краски при термопереносе?",
        title: "Термографическая печать",
        optionA: "Используя больше тонера",
        optionB: "Увеличивая скорость движения ленты",
        optionC: "Изменяя время теплового импульса",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какая технология позволяет изменять плотность точек при термосублимации?",
        title: "Термографическая печать",
        optionA: "Постоянное перемешивание красок",
        optionB: "Увеличение количества бумажных слоев",
        optionC: "Регулировка температуры и времени импульса",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "В чем особенность многокрасочной термопечати?",
        title: "Термографическая печать",
        optionA: "Использование только одного цветного слоя",
        optionB: "Последовательное нанесение каждого цветного слоя",
        optionC: "Нанесение всех цветов одновременно",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Какого разрешения могут достигать современные устройства термопереноса?",
        title: "Термографическая печать",
        optionA: "3200 dpi",
        optionB: "120 dpi",
        optionC: "72 dpi",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Почему носители краски в термопечати не используются повторно?",
        title: "Термографическая печать",
        optionA: "Они теряют красящий слой после одного использования",
        optionB: "Они ломаются после использования",
        optionC: "Они испаряются при нагреве",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Где часто применяется термосублимация?",
        title: "Термографическая печать",
        optionA: "Для нанесения изображений на текстильные ткани через воду",
        optionB: "Для печати газет",
        optionC: "Для печати цифровых фотографий",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Как работает непрерывная струйная печать?",
        title: "Струйная печать",
        optionA: "Капли выбрасываются постоянно",
        optionB: "Капли выбрасываются только при необходимости",
        optionC: "Краситель наносится с помощью механической щетки",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Какой метод используется в импульсной струйной печати?",
        title: "Струйная печать",
        optionA: "Капли выбрасываются случайным образом при нагреве",
        optionB: "Капли выбрасываются, когда устройство получает команду",
        optionC: "Капли формируются постоянно,не все попадают на материал",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что делает пьезоэлектрический преобразователь в струйной печати?",
        title: "Струйная печать",
        optionA: "Генерирует тепло для плавления красителя",
        optionB: "Создает давление для выброса капель красителя",
        optionC: "Сжимает воздух для выброса краски",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Основное преимущество устройств с непрерывной подачей красителя?",
        title: "Струйная печать",
        optionA: "Мгновенное высыхание краски на бумаге",
        optionB: "Возможность печати без использования электричества",
        optionC: "Высокая скорость печати",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какие типы устройств используются для управления траекторией капель?",
        title: "Струйная печать",
        optionA: "Нагревательные пластины",
        optionB: "Механические рычаги",
        optionC: "Зарядно-отклоняющие устройства",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какой фактор ограничивает термоэлектрическую печать?",
        title: "Струйная печать",
        optionA: "Слишком высокая скорость формирования капель",
        optionB: "Невозможность контролировать размер капли",
        optionC: "Избыточное давление в соплах",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что происходит с каплями, не участвующими в печати при непрерывной струйной печати?",
        title: "Струйная печать",
        optionA: "Они сгорают при контакте с воздухом",
        optionB: "Они отклоняются в уловитель и возвращаются в резервуар",
        optionC: "Они выбрасываются за пределы принтера",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Какая скорость выброса капель в непрерывной струйной печати?",
        title: "Струйная печать",
        optionA: "До 40 м/с",
        optionB: "До 100 м/с",
        optionC: "До 5 м/с",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Какую роль играет устройство рециркуляции в струйной печати?",
        title: "Струйная печать",
        optionA: "Очищает сопла от старой краски",
        optionB: "Захватывает использованные капли для повторного нанесения",
        optionC: "Возвращает неиспользованные капли обратно",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Какой недостаток у устройств с непрерывной подачей красителя?",
        title: "Струйная печать",
        optionA: "Невозможно печатать цветные изображения",
        optionB: "Капли не достигают бумаги",
        optionC: "Низкая точность позиционирования капель",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что такое коротрон?",
        title: "Терминология",
        optionA: "Устройство для зарядки фоторецептора",
        optionB: "Главный злодей трансформеров",
        optionC: "Робот для подачи бумаги в принтер",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое зарядка в электрофотографии?",
        title: "Терминология",
        optionA: "Процесс, при котором фоторецептор получает заряд",
        optionB: "Процесс, связанный с нагреванием бумаги",
        optionC: "Этап, когда принтер начинает работать сам по себе",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое термопузырьковая струйная печать?",
        title: "Терминология",
        optionA: "Способ печати, использующий холодные чернила",
        optionB: "Метод, при котором капли формируются за счет пузырьков",
        optionC: "Технология, использующая дыхание для распыления чернил",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что такое фоторецептор?",
        title: "Терминология",
        optionA: "Прибор для автоматической подгонки бумаги",
        optionB: "Элемент, на котором создается скрытое изображение",
        optionC: "Устройство, заменяющее картриджи в принтере",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что такое термосублимационная печать?",
        title: "Терминология",
        optionA: "Способ переноса изображения с помощью горячего воздуха",
        optionB: "Технология, использующая только водяной пар",
        optionC: "Метод, при котором краситель преобразуется в газ",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что такое пьезоэлектрический эффект?",
        title: "Терминология",
        optionA: "Явление, при котором давление создает напряжение",
        optionB: "Эффект, возникающий при быстром движении бумаги в принтере",
        optionC: "Состояние, когда чернила начинают танцевать",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое непрерывная струйная печать?",
        title: "Терминология",
        optionA: "Метод, при котором капли выбрасываются постоянно",
        optionB: "Способ, когда капли выбрасываются только по необходимости",
        optionC: "Технология, использующая ртуть вместо чернил",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },

    {
        question: "Что такое магнитная кисть?",
        title: "Терминология",
        optionA: "Деревянная палочка для размешивания чернил",
        optionB: "Специальный инструмент для создания магнитных карт",
        optionC: "Устройство, используемое для контроля и переноса тонера",
        optionD: "Пропустить вопрос",
        correctOption: "optionC"
    },

    {
        question: "Что такое полимерные связующие в тонере?",
        title: "Терминология",
        optionA: "Специальные чернила для водяных распечаток",
        optionB: "Полимеры, обеспечивающие плавление и адгезию тонера",
        optionC: "Вещества, которые делают принтеры более красивыми",
        optionD: "Пропустить вопрос",
        correctOption: "optionB"
    },

    {
        question: "Что такое носитель в процессе электрофотографии?",
        title: "Терминология",
        optionA: "Материал, обеспечивающий зарядку частиц тонера и их перенос",
        optionB: "Часть принтера, которая отвечает за звук",
        optionC: "Лист бумаги, который сам понимает, что нужно напечатать",
        optionD: "Пропустить вопрос",
        correctOption: "optionA"
    },
]


let shuffledQuestions = [] //массив для перемешанных вопросов

function handleQuestions() { 
    //создаем массив с вопросами в случайном порядке
    while (shuffledQuestions.length <= 39) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //текущий вопрос
let playerScore = 0  //текущий счет суммарный и ниже по категориям
let elScore = 0;
let tpScore = 0;
let stScore = 0;
let teScore = 0;
let wrongAttempt = 0 //количество ошибок в тесте
let indexNumber = 0 //для отображения след вопроса

// отображает след вопрос и номер текущего вопроса
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("display-title").innerHTML = currentQuestion.title;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentTitle = currentQuestion.title
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
            if (currentTitle === "Электрофотография"){
                elScore++
            }
                
            else if (currentTitle === "Термографическая печать"){
                tpScore++
            }
                
            else if (currentTitle === "Струйная печать"){
                stScore++
            }
                
            else if (currentTitle === "Терминология"){
                teScore++
            }
                
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 700)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 700)
        }
    })
}



//вызов след. вопроса
function handleNextQuestion() {
    checkForAnswer() //проверка выбран ли ответ
    unCheckRadioButtons()
    //задержка на 1 сек перед появлением след вопроса
    setTimeout(() => {
        if (indexNumber <= 39) {
//отображает вопрос пока индекс меньше кол-ва вопросов-1
            NextQuestion(indexNumber)
        }
        else {
            handleEndGameStats()//заканчивает тест если достигнут макс индекс вопроса
        }
        resetOptionBackground()
    }, 700);
}

//убирает цвет выбранного ответа при переходе на след. вопрос
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// убирает выделение радио-бтн при переходе на след. вопрос
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}




//функции для создания и выведения статистики по тесту
function handleEndGameStats() {
    const playerGrade = ((playerScore / 40) * 100).toFixed(2)

    //отображаемая статистика
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('elect').innerHTML = elScore
    document.getElementById('termo').innerHTML = tpScore
    document.getElementById('stry').innerHTML = stScore
    document.getElementById('term').innerHTML = teScore
    document.getElementById('score-modal').style.display = "flex"
}

function handleEndGameGraph(){
    // создание диаграммы типа 'полярные часы' c помощью библиотеки chart.js
    ctx = document.getElementById('radarChart').getContext('2d');
    Chart.defaults.font.size = 20;
    radarChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Электрофотография', 'Термографическая печать', 'Струйная печать', 'Терминология'],
            datasets: [{
                label: "Набранные очки",
                data: [elScore, tpScore, stScore, teScore],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(54, 162, 235)'
                  ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        max: 10 
                    }          
                }
            }
        }
    }
);
    document.getElementById('score-graph').style.display = 'flex'
}

function handleEndGameRank(){
    let remark_el = null
    let remarkColor_el = null
    let remark_tp = null
    let remarkColor_tp = null
    let remark_st = null
    let remarkColor_st = null
    let remark_te = null
    let remarkColor_te = null

    let rank_el = null
    let rank_tp = null
    let rank_st = null
    let rank_te = null
    
    if (elScore <= 3) {
        rank_el = "Ранг C"
        remark_el = "Начало пути! Продолжай учиться, чтобы глубже понять основы электрофотографии."
        remarkColor_el = "rgb(255, 99, 132)"
    } else if (elScore >= 4 && elScore <= 8) {
        rank_el = "Ранг B"
        remark_el = "Ты на верном пути! Нужно чуть больше практики, и всё получится."
        remarkColor_el = "#fdae61"
    } else if (elScore >= 9) {
        rank_el = "Ранг A"
        remark_el = "Твои знания достойны учебника! Электрофотография для тебя — как открытая книга."
        remarkColor_el = "rgb(75, 192, 192)"
    }

    if (tpScore <= 3) {
        rank_tp = "Ранг C"
        remark_tp = "Не сдавайся! Попробуй изучить принципы термопечати еще разок."
        remarkColor_tp = "rgb(255, 99, 132)"
    } else if (tpScore >= 4 && tpScore <= 8) {
        rank_tp = "Ранг B"
        remark_tp = "Неплохой результат! Ты почти разбираешься в термопечати, но нужно немного доработать детали."
        remarkColor_tp = "#fdae61"
    } else if (tpScore >= 9) {
        rank_el = "Ранг A"
        remark_tp = "Мастер термографии! Твои знания впечатляют!"
        remarkColor_tp = "rgb(75, 192, 192)"
    }

    if (stScore <= 3) {
        rank_st = "Ранг C"
        remark_st = "Первые шаги в струйной печати сделаны, но впереди ещё много открытий."
        remarkColor_st = "rgb(255, 99, 132)"
    } else if (stScore >= 4 && stScore <= 8) {
        rank_st = "Ранг B"
        remark_st = "Отличный прогресс! Ты уже неплохо понимаешь устройство струйной печати."
        remarkColor_st = "#fdae61"
    } else if (stScore >= 9) {
        rank_st = "Ранг A"
        remark_st = "Эксперт по струйной печати! Твои знания на высоте."
        remarkColor_st = "rgb(75, 192, 192)"
    }

    if (teScore <= 3) {
        rank_te = "Ранг C"
        remark_te = "Терминология пока сложна, но не сдавайся!"
        remarkColor_te = "rgb(255, 99, 132)"
    } else if (teScore >= 4 && teScore <= 8) {
        rank_te = "Ранг B"
        remark_te = "Продолжай изучать! Ты близок к тому, чтобы свободно владеть терминами."
        remarkColor_te = "#fdae61"
    } else if (teScore >= 9) {
        rank_te = "Ранг A"
        remark_te = "Терминологический гуру! Ты точно знаешь, о чём говоришь."
        remarkColor_te = "rgb(75, 192, 192)"
    }

    document.getElementById('remarks_el').innerHTML = remark_el
    document.getElementById('remarks_el').style.color = remarkColor_el
    document.getElementById('remarks_tp').innerHTML = remark_tp
    document.getElementById('remarks_tp').style.color = remarkColor_tp
    document.getElementById('remarks_st').innerHTML = remark_st
    document.getElementById('remarks_st').style.color = remarkColor_st
    document.getElementById('remarks_te').innerHTML = remark_te
    document.getElementById('remarks_te').style.color = remarkColor_te

    document.getElementById('ranks_el').innerHTML = rank_el
    document.getElementById('ranks_el').style.color = remarkColor_el
    document.getElementById('ranks_tp').innerHTML = rank_tp
    document.getElementById('ranks_tp').style.color = remarkColor_tp
    document.getElementById('ranks_st').innerHTML = rank_st
    document.getElementById('ranks_st').style.color = remarkColor_st
    document.getElementById('ranks_te').innerHTML = rank_te
    document.getElementById('ranks_te').style.color = remarkColor_te

    document.getElementById('score-rank').style.display = 'flex'

}


//функции закрытия окон со статистикой
function closeGameStats(){
    document.getElementById('score-modal').style.display = "none"
}

function closeGameGraph(){
    document.getElementById('score-graph').style.display = "none"
}

function closeGameRank(){
    document.getElementById('score-rank').style.display = "none"
}

//функция для повторного запуска теста
function restart() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    elScore = 0;
    tpScore = 0;
    stScore = 0;
    teScore = 0;
    shuffledQuestions = []
    NextQuestion(indexNumber)
}

//функция для закрытия окна с предупреждением
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}