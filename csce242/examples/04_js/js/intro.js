/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;

*/
document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    (event.currentTarget).classList.add("clicked");
};

document.getElementById("btn-happy").onclick = (event) => {
    document.getElementById("happy").innerHTML = "Hooray!";
    (event.currentTarget).classList.add("click-1");
};

document.getElementById("btn-sad").onclick = (event) => {
    document.getElementById("sad").innerHTML = "Awww :(";
    (event.currentTarget).classList.add("click-2");
};

/*document.getElementById("btn-clear").onclick = () {
    const clear = document.getElementById("clear");
    clear.innerHTML = "";
    clear.classList.remove("sad");
    clear.classList.remove("happy");
};*/


