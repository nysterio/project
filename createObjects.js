var QUANTITY_ROWS = 4;
var QUANTITY_COLUMNS = 4;

createField();
createTimer();
createGameField();
createBlocks(QUANTITY_ROWS * QUANTITY_COLUMNS);
createFieldButtons();
createButtons((QUANTITY_ROWS - 1) * (QUANTITY_COLUMNS - 1));
createFieldSystemButtons();
createSystemButtons();

// создаем поле (где будут размещены дальнейшие поля)
function createField() {
    var field = document.createElement("div");
    field.className = "field";
    document.body.appendChild(field);
}
// создаем поле для игры (где будут блоки)
function createGameField() {
    var gameField = document.createElement("div");
    gameField.className = "gameField";
    document.getElementsByClassName("field")[0].appendChild(gameField);
}
// создаем блоки (клетки)
function createBlocks(quantityBlocks) {
    for (var i = 0; i < quantityBlocks; i++) {
        var block = document.createElement("div");
        block.id = "block" + i;
        block.className = "block";
        block.style.order = i;
        //задаем цвет (выборочно)
        if ([0, 5, 11, 14].includes(i)) {
            block.style.background = "#f97aaf";
        }
        else if ([1, 6, 8, 15].includes(i)) {
            block.style.background = "#9c85f9";
        }
        else if ([3, 4, 10, 13].includes(i)) {
            block.style.background = "#ff9868";
        }
        else {
            block.style.background = "#e5d16f";
        }

        document.getElementsByClassName("gameField")[0].appendChild(block);
    }
}
// создаем поле кнопок
function createFieldButtons() {
    var fieldButtons = document.createElement("div");
    fieldButtons.className = "fieldButtons";
    document.getElementsByClassName("gameField")[0].appendChild(fieldButtons);
}
// создаем кнопки-переключатели
function createButtons(quantityButtons) {
    for (var i = 0; i < quantityButtons; i++) {
        var button = document.createElement("input");
        button.readOnly = true; // только для считывания (чтобы не появлялся курсор и рамочка вокруг при наведении)
        button.id = "button" + i;
        button.className = "button";
        document.getElementsByClassName("fieldButtons")[0].appendChild(button);
    }
}
// создаем поле системных кнопок
function createFieldSystemButtons() {
    var fieldSystemButtons = document.createElement("div");
    fieldSystemButtons.className = "fieldSystemButtons";
    document.getElementsByClassName("field")[0].appendChild(fieldSystemButtons);
}
// создаем системные кнопки
function createSystemButtons() {
//кнопка "Новая игра"
    var buttonNewGame = document.createElement("input");
    buttonNewGame.setAttribute("type", "button");
    buttonNewGame.className = "systemButtons";
    buttonNewGame.setAttribute("value", "Новая игра");
    document.getElementsByClassName("fieldSystemButtons")[0].appendChild(buttonNewGame);
// кнопка "Читы"
    var buttonCheat = document.createElement("input");
    buttonCheat.setAttribute("type", "button");
    buttonCheat.className = "systemButtons";
    buttonCheat.setAttribute("value", "Подрубить читы");
    document.getElementsByClassName("fieldSystemButtons")[0].appendChild(buttonCheat);
}
function createTimer() {
    var timer = document.createElement("div");
    timer.id = "timer";
    document.getElementsByClassName("field")[0].appendChild(timer);
}

