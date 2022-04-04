const host = "https://web-develop-react-express-chat.herokuapp.com"
const htmlGetUsers = document.querySelector("#getUsers");
const htmlUpdateButton = document.querySelector("#updateButton");

async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getUsers () {
    const users = await get(host+"/users/");
    htmlGetUsers.innerText = JSON.stringify(users);
};

function updateButtonClickHandler() {
    getUsers();
}

htmlUpdateButton.addEventListener("click", updateButtonClickHandler)
//PoC endpoints:
//Post users
const inputButton = document.querySelector("#userPostButton")
inputButton.addEventListener("click", userLogHandler)
async function userPostLog(url, data) {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}

const usuarioDatos = JSON.stringify({userName: "Ejemplo3351", password: "abc123"});
const urlLink = (host + "/login/")
function userLogHandler() {
    userPostLog(urlLink, usuarioDatos)
}

//get messages con autenticacion
//Componentes HTML y handler
const htmlMessages = document.querySelector("#getMessages")
const getMessageButton = document.querySelector("#getMessagesButton")
getMessageButton.addEventListener("click", getMessagesHandler)

// Funcion asincrona para get con autorizacion
async function authGet(url, token) {
    const response = await fetch(
        url,
        { 
            headers: {
                Authorization: token
            }
        }
    );
    const data = await response.json();
    return data;
}
//Funcion para obtener el token de autenticacion
function authToken(id, secret) {
    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${id}:${secret}`;
    // Y se codifican en Base64
    const base64token = btoa(authToken);
    return `Basic ${base64token}`;
}
//Constantes para funcion authGet
const messageToken = authToken("1649059890009", "abc123");
const messageUrl = (host + "/messages/")
//Creamos una funcion para ejecutar el authget y sacar los datos como un string
async function getMessages() {
    const obtainMessages = await authGet(messageUrl, messageToken);
    htmlMessages.innerText = JSON.stringify(obtainMessages);
};
//Llamamos a la funcion getMessages con el handler
function getMessagesHandler() {
    getMessages();
}

//Post message
async function authPost(url, token, data) {
    const response = await fetch(
        url,
        {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}
//Constantes para usar la funcion post
const postMessageButton = document.querySelector("#postMessagesButton")
postMessageButton.addEventListener("click", postMessageHandler)
const urlPostMessage = host + "/message/"
const postMessageToken = authToken("1649059890009", "abc123");
const messageContent = JSON.stringify({content: "Tengo una cosa que no funciona."});
function postMessageHandler() {
    authPost(host + "/message/", postMessageToken, messageContent);
}



