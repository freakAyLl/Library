//variables
const submitBtn= document.getElementById('submitButton')
let myLybray= []
let bookInfo= document.querySelectorAll('[data-input]')
//functions
class Book{
   constructor(name, author, status){
    this.name=name;
    this.author=author;
    this.status=status;
   }
}
let addBook =()=>{
    let newBook = new Book(bookInfo[0].value, bookInfo[1].value, bookInfo[2].value)
    myLybray.push(newBook)
    console.log(myLybray)
    clearInput()
}
let clearInput=()=>{bookInfo.forEach(function(e){e.value=''})}

//listeners
submitBtn.addEventListener('click',()=>{ addBook()})
