//задача 1. Создайте массив строк, состоящий из трёх любых сообщений. Найдите в нём самое длинное сообщение и скопируйте его текст в новый массив, состоящий из отдельных его символов.
let arrStr = ['Hello', 'Oranges', 'Age'];
function findLongestMessage(array) {
    //Нахадим самую длинную строку
    let maxString = '';
    for (i = 0; i < array.length; i++) {
        if (array[i].length > maxString.length) {
            maxString = array[i]
        }
    } 
    console.log(maxString);
    let symbols = maxString.split('');
    //Создаем новый массив символов
    console.log(symbols); 
}
if (Array.isArray(arrStr)) {    
    findLongestMessage(arrStr);
}
else {    
    console.log('Это не массив!');
}

//задача 2. Создайте функцию marker, принимает текст, цвет и число. 
//Функция добавляет на страницу данный текст указанным цветом и размером шрифта (переданное число). 
//Семейство шрифтов должно быть установлено как Comic Sans MS. 
//Для добавления стилей новым элементам необходимо использовать встраиваемые стили (атрибут style, применяемый напрямую к элементам).
function marker(text, color, num){
    document.write(`<p style="font-family:'Comic Sans MS'; color:${color}; font-size: ${num}px">${text}</p>`)
}
marker('Привет мир!', 'green', 32);

//задача 3. Создайте на странице HTML-элемент разделения контента <div id="box"></div>. 
//В скрипте создайте функцию placeImages, которая принимает массив строк, являющихся путями к изображениям, 
//после чего добавляет все эти изображения в созданный ранее div с идентификатором box. 
//Для добавления содержимого внутрь существующего элемента необходимо использовать метод innerHTML, 
//применяемый к идентификатору элемента.
let arrStrImg = [
    "https://img.freepik.com/free-photo/beautiful-white-cat-with-balls-indoors_23-2150752870.jpg?w=826&t=st=1703182156~exp=1703182756~hmac=b5a2dd88228ad5ac6fce0736a5ad0a625e35987c39b360dc2170342d9900f6fd",
    "https://cdn.fotosklad.ru/unsafe/fit-in/785x465/671137fac77a41d2b474d80ef6f23534/image.jpg",
    "https://cdn.fotosklad.ru/unsafe/fit-in/785x465/07b7a3fe2bb34ed3a10b194bd75736fc/image.jpg",
    "https://cdn.fotosklad.ru/unsafe/fit-in/785x465/2aea70bb48344e17b125028deab73e1a/image.jpg"
];
function placeImages(array) {  
    for (let i = 0; i < array.length; i++) {       
        document.getElementById("box").innerHTML += `<img src="${array[i]}" width=300px height=300px></img>;`       
    }
}
placeImages(arrStrImg);