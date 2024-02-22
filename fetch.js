/**
 * fetch() is a method available in the global window object, and is used to make requests to a server.
 * It is a modern replacement for XMLHttpRequest.
 * It is basically a promise-based method, and is used to make requests to a server.
 * It is a part of the window object, and is not available in Node.js.
 * It gives a response object, which contains body, headers, ok, redirected, status, statusText, type, url, and other properties.
 * It will convert in json format by using response.json() method.
 * response.json() also a promise-based method, and is used to convert the response to json format.
 * It will give a json object, which contains the data from the server.
 * Or, we can say it gives a result.
 */

const API = "http://api.github.com/users/divyarajsinhsindhav";

async function handleResponse() {
    try {
        const data = await fetch(API);
        const JSONObject = await data.json();
        console.log(JSONObject);
    } catch (err) {
        console.log(err);
    }
}
handleResponse();