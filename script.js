const books = [['1894','Великий Гэтсби','Отцы и дети'],
    ['Война и мир','Мастер и Маргарита','Гордость и предубеждение'],
    ['Три товарища','Тихий Дон','Вишневый сад']
];

let action = prompt('1 - Вывод всех книг\n2 - На какой полке книга\n3 - Какой книга на полке\n\nВыберете действие(1,2,3)');

switch(action) {
    case '1':  
        for(let i = 0; i < books.length; i++) {
            for(let j = 0; j < books[i].length; j++) {
                console.log(books[i][j]);
                document.write(books[i][j]);
            }
        }
        break;
  
    case '2': 
        let bookChoice = prompt('Введите книгу: ');
        for(let i = 0; i < books.length; i++) {
            for(let j = 0; j < books[i].length; j++) {
                if (books[i][j].toLowerCase() === bookChoice.toLowerCase()) {
                    alert(`Книга  ${j + 1} на полке  ${i + 1}`)
                }
            }
        }   
        break;

    case '3': 
        let shelf = prompt('Введите полку: ');
        let book = prompt('Введите книгу на полке: ');
        alert(`На ${shelf} полке ${book}-я книга: ${books[shelf - 1][book - 1]}`);
    

    default:
        break;
  }
