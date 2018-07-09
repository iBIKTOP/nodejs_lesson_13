//подключаем модуль fs
var fs = require('fs');
//синхронно считываем данные из файла и сохраняем в переменную
var old_text = fs.readFileSync('test.txt', 'utf8');
var text = "Новый текст 3";
//соеденяем полученый текст с новым
var new_text = old_text + "\r\n" + text;
//записываем текст в файл
fs.writeFile("test.txt", new_text, function(err,content){});