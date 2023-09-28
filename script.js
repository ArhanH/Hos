const button = document.querySelector("button");


button.addEventListener("click", updateName);


function updateName(){
    const name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
}


const button2 = document.querySelector("button2");


button.addEventListener("click", updateAge);


function updateAge(){
    const age = prompt("Enter a new age");
    button2.textContent = `Age: ${age}`;
}

