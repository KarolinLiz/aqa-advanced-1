import  Book  from "./Book.js";

export default class EBook extends Book {
constructor (name,author,year,fileFormat ) {
 super(name,author,year)
 this._fileFormat = fileFormat
}
get fileFormat(){
    return this._fileFormat;
}
set format(fileFormat) {
    if (fileFormat !== "jpg" ) {
   console.log('The format of file should be only jpg');
   return;
   }
   this._format = fileFormat;
}
static fromBook(book, fileFormat) {
    return new EBook(book.name,book.author,book.year,fileFormat)
 }
printInfo(){
    console.log(`The ${this._name} was written in ${this._year} by famous writer ${this._author} and its format is ${this._fileFormat}`)
}
 
}


