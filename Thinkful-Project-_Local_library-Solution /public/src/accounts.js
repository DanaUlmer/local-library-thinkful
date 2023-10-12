function findAccountById(accounts, id) {
  for(let account in accounts){
    if(id === accounts[account].id){
      return accounts[account];
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last ? 1 : -1) )
  return accounts;
}  

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let total = 0;
  books.forEach((book) =>
    book.borrows.forEach((borrow) => id === borrow.id && total++)
  );
  return total;
} 

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];

  for (let book of books) {
    if (
      book.borrows[0] &&
      book.borrows[0].id === account.id &&
      !book.borrows[0].returned
    ) {
      let author = authors.find((author) => author.id === book.authorId);
      book.author = author;
      result.push(book);
    }
  }

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
