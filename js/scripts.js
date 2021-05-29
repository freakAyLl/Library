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
        return `tittle: ${element.title}, author: ${element.author}, pages: ${element.pages}, reader: ${element.read}`
    }
}
let actual= 0
function addBookToLibrary() {
    let newBook = document.querySelectorAll('[data-input]')
    actual = new Book(newBook[0].value,newBook[1].value,newBook[2].value,newBook[3].value)
    bookArr.push(actual)
    for(let i=0;i<4;i++){newBook[i].value=''}
    displayBooks()
    //console.log(actual)
    console.log(bookArr)
    actual++
}
function displayBooks(){
    let gridContainer= document.getElementById('grid-container')
    bookArr.forEach(element=>{
        console.log(element.title)
        if (document.getElementById(element.title)!=null){return}
        element.title=document.createElement('div')
        element.title.id= element.title
        element.title.classList.add('card')
        //newDiv.innerHTML=info()
        gridContainer.appendChild(element.title)
    })
}
//listeners
sendBtn.addEventListener('click', function(){addBookToLibrary()})
