function findAuthorById(authors, id) {
  for (let object in authors){
    if (id === authors[object].id){
      return authors[object];
    }
  }
}

function findBookById(books, id) {
   for (let object in books){
    if (id === books[object].id){
      return books[object];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let inStock = [];

  for(let book of books){
    if(!book.borrows[0].returned){
      checkedOut.push(book);
    } else {
      inStock.push(book);
    }
  }
  
  return [checkedOut, inStock];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id);
    return {...borrow, ...account};
  }).slice(0, 10); 
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
