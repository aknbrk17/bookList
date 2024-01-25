export const addBook = (title , author , pageCount) =>{
    return {
        type: 'ADD_BOOK',
        payload: {
            title , author , pageCount
        }
    }
}

export const deleteBook = (book) => {
    return{
        type: 'DELETE_BOOK',
        payload: book
    }
}

export const selectBook = (book) => {
    return {
        type: 'SELECT_BOOK',
        payload: book
    }
}

export const deselectBook = () => {
    return {
        type: 'DESELECT_BOOK'
    }
}