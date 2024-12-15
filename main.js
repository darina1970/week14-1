// Создаём функцию для подбора случайных значений оценок студентов
function getRandomGrade(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}
// Выводим в консоль случайные оценки для дальнейшего создания массива
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));
// console.log(getRandomGrade(0, 100));

// Создаём массив из случайных чисел, которые выводились в консоль
const grades = [35, 50, 76, 26, 63, 58, 99, 25, 51, 39, 85, 29];

// Рассчитайте и выведите средний балл студентов, используя методы массивов
const totalSum = grades.reduce(function(a, b) {
    return a + b;
});
const average = totalSum / grades.length;
const avr = document.getElementById('avr');
avr.textContent = average;



// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива
const maxGrade = Math.max(...grades);
const max = document.getElementById('max');
max.textContent = maxGrade;

// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
const min = document.getElementById('min');
min.textContent = minGrade;


// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const filteredGrades = grades.filter(el => el >= 60);
const positiveGradesNumber = filteredGrades.length;
const positive = document.getElementById('positive');
positive.textContent = positiveGradesNumber;


// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const filteredGradesTwo = grades.filter(el => el < 60);
const negativeGradesNumber = filteredGradesTwo.length;
const negative = document.getElementById('negative');
negative.textContent = negativeGradesNumber;

// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E
const newGrades = grades.map((el) => {
    if (el >= 80 && el < 100) {
        return "A";
    } else if (el >= 60 && el < 79) {
        return "B";
    } else if (el >= 40 && el < 59) {
        return "C";
    } else if (el >= 20 && el < 39) {
        return "D";
    } else {
        return "E";
    }
});

console.log(newGrades);







