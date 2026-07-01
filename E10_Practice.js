let balance = 1000;

while(true) {
    let selection = +prompt(`
    Please select an option:
    1. Deposit
    2. Withdraw
    3. Check Balance
    4. Exit
    `)

    /* if (selection === 4) {
        alert("Thank you for using our ATM. Have a nice day!");
    } */
    

    switch(selection) {
        case 1:
            let deposit = +prompt("Enter amount to deposit:");
            balance += deposit;
            alert(`Deposited $${deposit}. New balance: $${balance}`);
            break;
        case 2:
            let withdraw = +prompt("Enter amount to withdraw:");
            if (withdraw > balance) {
                alert("Insufficient balance.");
            } else {
                balance -= withdraw;
                alert(`Withdrawn $${withdraw}. New balance: $${balance}`);
            }
            break;
        case 3:
            alert(`Your balance is $${balance}`);
            break;
            
        case 4:
            alert("Thank you for using our ATM. Goodbye!");
            break;

        default:
            alert("Invalid selection. Please try again.");
            break;
        
    }
}