import { combineReducers } from "redux";

const bookListReducer = (oldBookList = [] , action) => {
    if (action.type === 'ADD_BOOK') {
        return [...oldBookList , action.payload];
    }else if (action.type === 'DELETE_BOOK') {
        return oldBookList.filter(oldBook => oldBook.title !== action.payload.title);
    }
    return oldBookList;
}

const selectedBookReducer = (oldSelectedBook = {} , action) => {
    if(action.type === 'SELECT_BOOK') {
        return action.payload;
    } else if (action.type === 'DESELECT_BOOK') {
        return {};
    }
}

export default combineReducers ({
    bookList: bookListReducer,
    selectedBook: selectedBookReducer
});