import {v4 as uuidv4} from 'uuid'
function createBookWithID(book){
    return {
        ...book,
        id:uuidv4(),
        favorite:false,
    }
}
export {createBookWithID}