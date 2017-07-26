import chalk from 'chalk';
import buffer from 'buffer';
import fetch from 'isomorphic-fetch'

it('getting info from api server', () =>{

const credentials = new buffer.Buffer('abc123' + ':' + 'michael');
const encodedAuth =  credentials.toString('base64');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyYU5hbWUiOiJtamltZW5leiIsImVtYWlsIjoibWppbWVuZXpAZ21haWwiLCJpYXQiOjE1MDA1ODczNTIsImV4cCI6MTUwMDU5MTM1Mn0.pV0ye89W7xdVGz9p9-1fFJRR-2Axk_hdzXeqCSomfgQ';
const headers = {
    'Authorization': 'Basic ' + encodedAuth,
    'token' : token
};
fetch('http://192.168.137.249:5000/sec-api/post-data',{
    headers: headers
}).then((response) => {
    //console.log(response.json());
    if( response.status >=200 && response.status <= 300){
        console.log(response);
    }
    throw{
        badCredentials: response.status == 401,
        credentialsUnauthorized: response.status == 401,
        missToken: response.status == 505,
        invalidToken: response.status == 500,
        ok: response.status == 200
    }
})
.then((response) => {
    return response.json();
})
.then((results) => {
    return JSON.stringify(results);//console.log(JSON.stringify(results));
    //return results.;
})
.catch((err) => {
    console.log(err);
    //return JSON.stringify(err);
    //return (err);
})

});