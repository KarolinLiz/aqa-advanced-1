export default class Book {
    constructor(name,author,year){
        this._name = name;
        this._author = author;
        this._year = year;
    }
    static getOidestBook(books) {
        if (!books.length) {
            return null;
        }
        const sorterBooks = [...books].sort((a,b)=> a.year - b.year);
        return sorterBooks[0];
    }
     get name(){
         return this._name;
     }
     get author(){
        return this._author;
    }
    get year(){
        return this._year;
    }
         set name(nameOfBook) {
	 	if (typeof nameOfBook !== "string" ) {
		console.log('The books name should be the text');
		return;
		}
        this._name = nameOfBook;
    }
    set author(nameOfAuthor) {
        if (typeof nameOfAuthor !== "string" ) {
       console.log('The authors name should be the text');
       return;
       }
       this._author = nameOfAuthor;
   }
   set year(date) {
    if ( date <= 0 || date>2023) {
   console.log('The creating could not be equal zero or more then 2023');
   return;
   }
   this._year = date;
}
    printInfo() {
        console.log(`The ${this._name} was written in ${this._year} by American writer ${this._author}`)
    }
}


