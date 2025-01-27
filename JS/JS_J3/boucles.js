// let index = 0
// while (index != 10) {
//     console.log(index)
//     index++
// }

const revertMessage = (message) => {

    let newMessage = ""
    
    message.split("").forEach(letter => {

        newMessage = letter + newMessage
            
    });

    console.log(newMessage)
    
}

revertMessage('coucou ! Alors les vacances ??')