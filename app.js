let items = [];
let newItem = undefined;
let command = "";

while (command.toLowerCase() !== 'quit') {
    command = prompt("Enter a command");

    if (command.toLowerCase() === 'new') {
        newItem = prompt("Enter an item to add.")
        items.push(newItem);
        console.log(`${newItem} has been added.`)
    }

    else if (command.toLowerCase() === 'list') {
        for (i = 0; items.length > i; i++) {
            console.log(`${i} - ${items[i]}`);

        }
    }
    else if (command.toLowerCase() === 'delete') {
        let remove = prompt("Enter item ID to delete");
        console.log(`Item: ${remove} - ${items[remove]} has been removed.`);
        items.splice(remove, 1);


    }
}