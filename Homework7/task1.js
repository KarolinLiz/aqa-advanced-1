export default class Book {
    constructor(name,author,dateOfCreating){
        this._name = name;
        this._author = author;
        this._dateOfCreating = dateOfCreating;
    }
    static getOidestBook(books) {
        if (!books.length) {
            return null;
        }
        const sorterBooks = [...books].sort((a,b)=> a.dateOfCreating - b.dateOfCreating);
        return sorterBooks[0];
    }
     get name(){
         return this._name;
     }
         set name(value) {
	 	if (typeof value !== "string" ) {
		console.log('The books name should be the text');
		return;
		}
        this._name = value;
    }
    set author(value1) {
        if (typeof value1 !== "string" ) {
       console.log('The authors name should be the text');
       return;
       }
       this._author = value1;
   }
   set dateOfCreating(value2) {
    if ( value2 <= 0 || value2>2023) {
   console.log('The creating could not be equal zero or more then 2023');
   return;
   }
   this._dateOfCreating = value2;
}
    printInfo() {
        console.log(`The ${this._name} was written in ${this._dateOfCreating} by American writer ${this._author}`)
    }
}


