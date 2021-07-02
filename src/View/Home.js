import React, { Component } from 'react';

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

export default Search;