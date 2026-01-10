const totalBalance = document.getElementById("balance")
const income = document.getElementById("money-plus")
const expense = document.getElementById("money-minus")
const historyList = document.getElementById("list")
const form = document.getElementById("form")
const transName = document.getElementById("text")
const transAmount = document.getElementById("amount")
const addBtn = document.getElementById("btn")

// Add transaction function
let transaction = [];
function addTransaction (e){
  e.preventDefault();
 // geting the values from the input fields
const name = transName.value.trim(); // removes the extra spaces in the input field
const amount = transAmount.value.trim();  

// making sure the user entered something in the input fields 
if(name === '' || amount ===''){
    alert('Please fill in both name and amount of transaction')
    return;
}

// convert the amount into a number 
const amountValue = parseFloat(amount);
// check if the amount is a valid number 
if(isNaN(amountValue) || amountValue === 0){
    alert('Please enter a valid number (not zero)!');
    return;
}


// Determine if its an income or expense
const type = amountValue > 0? 'income' : 'expense';

// create a transaction object 
 const newTransaction ={
id: Date.now(),
name: name,
amount: amountValue,
type: type
 };

 // adding this newTransaction object in our transaction variable
 transaction.push(newTransaction);

 // clear the input fields
  transName = '';
  transAmount = '';

  updateDisplay();




}