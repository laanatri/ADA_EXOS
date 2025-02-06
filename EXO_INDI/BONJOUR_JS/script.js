const firstname = prompt("Quel est ton nom ?");

const sayHello = (name, hour) => {
    let message = "Bonjour !";
    if (hour >= 18) {
        message = "Bonsoir !"
    }
    message = message.slice(0, 8) + name + " !"
    // console.log(message);
    document.querySelector('h1').innerText = message;
};

// sayHello(`Beyonce`, 11);
// sayHello(`Beyonce`, 18);
// sayHello(`Beyonce`, 17);
sayHello(firstname, 15);