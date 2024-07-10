/* Функция добавляющая класс "active" зажатой кнопке */
function setActiveOnButton(keyCode, isEnable) {
    let classBtnOfKeyCode = '.k' + keyCode;
    let elements =  document.querySelectorAll(classBtnOfKeyCode);
    if (isEnable === true) {
        elements.forEach((element) => {
            element.classList.add("active");
        })
    } else {
        elements.forEach((element) => {
            element.classList.remove("active");
        })
    }
}

document.addEventListener('keydown', function (event) {
    console.log(event.keyCode);
    setActiveOnButton(event.keyCode, true);
  });

document.addEventListener('keyup', function (event) {
    console.log(event.keyCode);
    setActiveOnButton(event.keyCode, false);
  });



