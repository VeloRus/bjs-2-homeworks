//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
         this.name = name;
         this.releaseDate = releaseDate;
         this.pagesCount = pagesCount;
         this.state = 100;
         this.type = null;
    }

    fix() {
        if (this.state < 100) {
            this.state *= 1.5;
        }
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        }  else {
            this._state = value;
        }
    }
   
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, tate, type) {
        super(name, releaseDate, pagesCount, tate, type);
         this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, tate, type) {
        super(name, releaseDate, pagesCount, tate, type);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, tate, type) {
        super(author, name, releaseDate, pagesCount, tate, type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, tate, type) {
        super(author, name, releaseDate, pagesCount, tate, type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, tate, type) {
        super(author, name, releaseDate, pagesCount, tate, type);
        this.type = 'detective';
    }
}



//Задача 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let item of this.books) {
            if (item[type] == value) {
                return item
            }
        } return null
    }

    giveBookByName(bookName) {
        for (let item of this.books) {
          if (bookName === item.name) {
              this.books.splice(item.indexOf, 1);
              return item;
          } 
      }
          return null;
    }
}

//Задача 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}


