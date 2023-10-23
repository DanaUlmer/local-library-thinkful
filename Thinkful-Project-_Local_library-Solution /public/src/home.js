function getTotalBooksCount(books) {
  return books.length;
}
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = 0;
  for (let book in books) {
    if (books[book].borrows[0].returned === false) borrowed++;
  } 
  return borrowed;
} 

function createGenreArray(genres) {
  let genreArray = Object.keys(genres).map((genre) => {
    return { name: genre, count: genres[genre] };
  });
  genreArray.sort((a, b) => b.count - a.count);
  return genreArray.slice(0, 5);
}

  function getMostCommonGenres(books) {
  let genres = {};
  for (let book of books) {
    let genre = book.genre;

    if (genres[genre]) {
      genres[genre]++;
    } else {
      genres[genre] = 1;
    }
  }
  return createGenreArray(genres);
}



function getMostPopularBooks(books) {
  let sortedBooks = books.sort((a, b) => b.borrows.length - a.borrows.length);

  return sortedBooks.reduce((total, book, index) => {
    if (index < 5) {
      total.push({ name: book.title, count: book.borrows.length });
    }
    return total;
  }, []);
}


function getMostPopularAuthors(books, authors) {
  let result = [];

  authors.forEach(author => {
    let authorBooks = books.filter(book => book.authorId === author.id);
    let totalBorrows = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);

    result.push({ name: `${author.name.first} ${author.name.last}`, count: totalBorrows });
  });

  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
