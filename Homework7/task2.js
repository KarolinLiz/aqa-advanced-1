import  Book  from "./task1.js";

export default class EBook extends Book {
constructor (name,author,dateOfCreating,fileFormat ) {
 super(name,author,dateOfCreating)
 this.fileFormat = fileFormat
}
static fromBook(book, _fileFormat) {
    return new EBook(book._name,book._author,book._dateOfCreating,_fileFormat)
 }
printInfo(){
    console.log(`The ${this._name} was written in ${this._dateOfCreating} by American writer ${this._author} and its format is ${this._fileFormat}`)
}
 
}


