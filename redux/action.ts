import {UPDATE_POST, POSTS_LIST} from './constants';

// In this file we can tell redux to perform specific actions according to end user interaction.
export function updatePost(item: object){
    return{
        type: UPDATE_POST,
        payload: item
    }
}

export function getPostsList(){
    return{
        type: POSTS_LIST
    }
}