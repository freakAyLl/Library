//variables
const sendBtn= document.getElementById('sendButton')
let bookArr= []
//functions
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title}, ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary() {
    let newBook = document.querySelectorAll('[data-input]')
    let actualBook = []
    for(let i=0;i<4;i++){actualBook.push(newBook[i].value)}
    // do stuff here
    //console.log(nameBook)
    //console.log(sendBtn)
    bookArr.push(actualBook)
    console.log(bookArr)
    for(let i=0;i<4;i++){newBook[i].value=''}
}
//listeners
sendBtn.addEventListener('click', function(){addBookToLibrary()})
