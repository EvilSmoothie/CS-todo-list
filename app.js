const items = [];
let command = "";

while (command.toLowerCase() !== 'quit' && command.toLowerCase() !== 'q') {
    command = prompt("Enter a command");

    if (command.toLowerCase() === 'new') {
        let newItem = prompt("Enter an item to add.")
        items.push(newItem);
        console.log(`${newItem} has been added.`)
    }

    else if (command.toLowerCase() === 'list') {
        console.log("********")
        for (i = 0; items.length > i; i++) {
            console.log(`${i} - ${items[i]}`);

        }
        console.log("********")
    }
    else if (command.toLowerCase() === 'delete') {
        let remove = parseInt(prompt("Enter item ID to delete"));


        if (Number.isNaN(remove)) {
            console.log("You must enter a number");
        }

        else if (remove >= items.length) {
            console.log("Item ID not found");
        }

        else {
            console.log(`Item: ${remove} - ${items[remove]} has been removed.`);
            items.splice(remove, 1);
        }
    }
    else {
        if (command !== 'q' && command !== 'quit') {
            console.log("Command not recongised");
        }

    }
}

console.log("Done")