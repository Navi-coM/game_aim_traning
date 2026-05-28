
export function range() {
    let inputRange = document.getElementById('range-input');
    let spanRange = document.getElementById('range-value');
    spanRange.textContent = inputRange.value;
    console.log(spanRange.textContent);
}


// -------------------------- ДЗ ------------------------

// 1. Поменыть цвет внутри инпута
// 2. Добавить title dв  котором будет в режима онлайн меняться цифра миллисекунд