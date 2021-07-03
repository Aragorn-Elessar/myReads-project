import React, { Component } from 'react';
import BookShelf from '../Components/BookShelf';
import AddBook from '../Components/AddBook';

class Home extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf />
                </div>
                <AddBook />
            </div>
        );
    }
}

export default Home;