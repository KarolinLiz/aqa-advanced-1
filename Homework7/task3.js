import  Book  from "./task1.js";
import  EBook  from "./task2.js";

const MobyDick = new Book ("Moby-Dick","Herman Melville", 1851);
const Typee = new Book (" Typee","Herman Melville",1846);
const HarryPotter = new Book ("Harry Potter and the Philosopher's Stone" , "J.K. Rowling" , 2015)
MobyDick.printInfo();
Typee.printInfo();
HarryPotter.printInfo();

const TheWorldofAvatar = new EBook ("The World of Avatar","Dorling Kindersley",  2022, "png");
TheWorldofAvatar.printInfo();
const MobгпDick = new Book (4556,"Herman Melville", 1851);
MobгпDick.printInfo();
MobyDick.name=4556
MobyDick.author=985
MobyDick.dateOfCreating= -45
MobyDick.dateOfCreating= 2033
console.log(EBook.fromBook(MobyDick,"jpg"));
console.log(Book.getOidestBook([MobyDick,Typee,HarryPotter]));
