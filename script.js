// script.js

// Function to fetch books from an API (example API)
async function fetchBooks() {
    try {
        const response = await fetch('https://api.example.com/books'); // Replace with your actual API
        const books = await response.json();

        // Display books on the page
        const bookList = document.getElementById('book-list');
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Year: ${book.year}</p>
            `;
            bookList.appendChild(bookItem);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);
