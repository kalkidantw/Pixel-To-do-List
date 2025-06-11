let storage = []; //why let and not var

//add items
function add_tolist(task){
    storage.push(task);
}

function printList(){
    for(let i = 0 ; i < storage.length; i++){
        console.log(storage[i]);
    }
}



//my to do list
function askYesorNo(){
    const readline = require("readline");

    //making interface to handle input and output
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });



    if (storage.length === 0){
        console.log("Your To-do list is empty, would you like to add tasks (Yes/No): ");
        rl.question("", function(input){
        
        if (input === "Yes"){
            console.log("Lets add tasks...");
            promptTask();
        }
        else if (input === "No"){
            console.log("Okay list will stay empty.");
        }
        else{
            console.log("Please type \"Yes\" or \"No\": ");
            askYesorNo();
        }            
        });
    }

    function promptTask(){
        rl.question("Add task, input 'a' if finished adding:", function(input){
            

            if (input === "a"){
                console.log("To-do list:");
                printList();
                removeTask();

            }
            else{
                let task = input;
                add_tolist(task);
                console.log("To-do list:");
                printList();
                promptTask();
            
            }
        });
    }

    function removeTask(){
        if (storage.length === 0){
            console.log("To-Do list is empty.");
            promptTask();
        }

        rl.question("Do you want to remove any tasks? enter the task row number (a to cancel):", function(input){
            let row = input; 
            row = parseInt(input);
            if (input === "a"){
                console.log("To-do list:");
                printList();
                rl.close();
                return;
            }

            else if(row - 1 >= storage.length){
                console.log("Enter a valid row.");
                removeTask();
            }
            else if (row - 1 < 0){
                console.log("Enter a valid row.");
                removeTask();
            }
            

            else{
                storage.splice(row-1, 1);
                printList();
                removeTask();
            }
        });
    }

}
askYesorNo();
