class Book {
    constructor(bookName,authorName,isbnNumber,category){
        this.bookName = bookName;
        this.authorName = authorName;
        this.isbnNumber = isbnNumber;
        this.category = category;
    }
}

class UIBook{
    // display book
    static displayBook(book){
        let tableBody = document.querySelector('#table_body');
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${book.isbnNumber}</td>
                              <td>${book.bookName}</td>
                              <td>${book.authorName}</td>
                              <td>${book.category}</td>
                              <td>
                                <i class="fa fa-times-circle delete"></i>
                              </td>`;
        tableBody.appendChild(tableRow);
        // display an alert Message
        UIBook.displayAlertMessage('Book Added','#5de25d');
    }

    // clear Form Fields
    static clearFormFields(){
        document.querySelector('#book_name').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#category').value = '';
    }

    // validations
    static validateBook(book){
        return  UIBook.validateBookName(book) &&
                UIBook.validateAuthorName(book) &&
                UIBook.validateISBN(book) &&
                UIBook.validateCategory(book);
    }

    // Book Name Validation
    static validateBookName(book){
        if(book.bookName === ''){
            UIBook.applyColors('#book_name');
            UIBook.displayAlertMessage('Book Name is Required','orangered');
            return false;
        }
        else{
            UIBook.removeColors('#book_name');
            return true;
        }
    }

    // Author Name Validation
    static validateAuthorName(book){
        if(book.authorName === ''){
            UIBook.applyColors('#author');
            UIBook.displayAlertMessage('Author Name is Required','orangered');
            return false;
        }
        else{
            UIBook.removeColors('#author');
            return true;
        }
    }

    // ISBN Name Validation
    static validateISBN(book){
        if(book.isbnNumber === ''){
            UIBook.applyColors('#isbn');
            UIBook.displayAlertMessage('ISBN is Required','orangered');
            return false;
        }
        else{
            UIBook.removeColors('#isbn');
            return true;
        }
    }

    // Category Name Validation
    static validateCategory(book){
        if(book.category === ''){
            UIBook.applyColors('#category');
            UIBook.displayAlertMessage('Category Name is Required','orangered');
            return false;
        }
        else{
            UIBook.removeColors('#category');
            return true;
        }
    }

    // Apply Colors
    static applyColors(elementSelector){
        document.querySelector(elementSelector).style.border = '1px solid orangered';
        document.querySelector(elementSelector).style.backgroundColor = 'lightsalmon';
        document.querySelector(elementSelector).style.boxShadow = '0 0 10px red';
    }

    // removeColors
    static removeColors(elementSelector){
        document.querySelector(elementSelector).style.border = 'none';
        document.querySelector(elementSelector).style.backgroundColor = 'white';
        document.querySelector(elementSelector).style.boxShadow = '0 0 0px white';
    }

    // Display Alert Message
    static displayAlertMessage(message,bgColor){
        let alertDiv = document.querySelector('#alert-div');
        let messageTag = document.createElement('p');
        messageTag.textContent = message;
        messageTag.style.backgroundColor = bgColor;
        alertDiv.appendChild(messageTag);
        setTimeout(UIBook.removeAlertMessage,3000);
    }

    // removeAlertMessage
    static removeAlertMessage(){
        document.querySelector('#alert-div p').remove();
    }
}

// Form Submission
let theForm = document.querySelector('#add-book-form');
theForm.addEventListener('submit',function(e) {
    // Prevent the Actual form Submission
    e.preventDefault();

    let bookName = document.querySelector('#book_name').value;
    let authorName = document.querySelector('#author').value;
    let isbnNumber = document.querySelector('#isbn').value;
    let category = document.querySelector('#category').value;

    // Create a Book Object
    let book = new Book(bookName,authorName,isbnNumber,category);
    let isValidBook = UIBook.validateBook(book);
    if(isValidBook){
        // display book on the table
        UIBook.displayBook(book);
        // Clear the form Fields
        UIBook.clearFormFields();
    }
});

// Delete Functionality of Book
let tableBody = document.querySelector('#table_body');
tableBody.addEventListener('click',function(e) {
    let targetElement = e.target; // to get the target element
    if(targetElement.classList.contains('delete')){
        targetElement.parentElement.parentElement.remove();
        UIBook.displayAlertMessage('Book is Removed','blueviolet');
    }
});