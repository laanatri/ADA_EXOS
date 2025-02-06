const okDrive = (firstname, age) => {
    if (age >= 18) {
        console.log(`${firstname} peux conduire.`)
    } else {
        console.log(`${firstname} ne peux pas conduire.`)
    }
}

okDrive("Mathieu", 22)
okDrive("Léa", 15)
okDrive("Jean", 17)