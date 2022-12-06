const API = 'http://127.0.0.1:4200/easymenu/api/v1/';

export function get(path: string){
    return fetch(API + path)
        .then(result => result.json()) 
}