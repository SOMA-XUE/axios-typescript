import axios from 'axios';

const baseUrl = 'http://localhost:8080';
interface User {
    name: string;
    password: string;
}

let user: User = {
    name: 'xiaoming',
    password: 'xxxxx',
}

axios({
    method:'get',
    url: baseUrl + '/get',
    params: user,
}).then()