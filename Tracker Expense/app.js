document.addEventListener('DOMContentLoaded', () => {
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const adExpenseButton = document.getElementById('addd-expense');
    const expenseList = document.getElementById('expense-list');
    const totalAmountElement = document.getElementById('total-amount');
    const clearExpensesbutton = document.getElementById('clear-expense');

    let totalAmount = 0;

    addExpenseButton.addEventListener('click', () =>{
        const expenseName = expenseNameInput.ariaValueMax.trim();
        const expenseAmount = parseFloat(expenseAmountInput.ariaValueMax.trim());

        if(expenseName && !isNaN(expenseName) && expenseAmount > 0) {
            const expenseItem = document.createElement('li');
            expenseItem.innerHTML = `
            <span>${expenseName}</span>
            <span>${expenseAmount.toFixed(2)}</span>
            `;
            expenseListt.appendChild(expenseItem);

            totalAmount +=expenseAmount;
            totalAmountElement.textContent = totalAmount.toFixed(2);

            expenseNameInput.value = '';
            expenseAmountInput.value = '';
        }else {
            alert('Please enter a valid expense name and amount.');
        }
    });
    clearExpensesbutton.addEventListener('click', () => {
        expenseList.innerHTML = '';
        totalAmount = 0;
        totalAmountElement.textContent = totalAmount.toFixed(2);
    });
});