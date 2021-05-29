//variables
const sendBtn= document.getElementById('sendButton')
let bookArr= []
//functions
function Book([title, author, pages, read]){
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
    let actualArr= []
    for(let i=0;i<4;i++){actualArr.push(newBook[i].value)}
    let actual = new Book(actualArr)
    bookArr.push(actual)
    //console.log(actual)
    //console.log(bookArr)
    for(let i=0;i<4;i++){newBook[i].value=''}
}
//listeners
sendBtn.addEventListener('click', function(){addBookToLibrary()})
