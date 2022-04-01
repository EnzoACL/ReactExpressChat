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
//post users
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

const usuarioDatos = JSON.stringify({userName: "Ejemplo351", password: "abc123"});
const urlLink = (host + "/login/")
function userLogHandler() {
    userPostLog(urlLink, usuarioDatos)
}

//get messages

const showMessages = document.querySelector("#getMessages")


const getMessageButton = document.querySelector("#getMessagesButton")

getMessageButton.addEventListener("click", getMessagesHandler)
function getMessagesHandler(){

}


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

const messageUrl = (url + "/messages/")
const messageToken = ()
