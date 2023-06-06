let budget_Amount = document.getElementById("total-budget");
let error = document.querySelectorAll(".error");
let show_Budget = document.getElementById('show_budget');
let show_Expenses = document.getElementById("show_expense");
let show_Balance = document.getElementById("show_balance");
let expense_Name = document.getElementById("expense-name");
let expense_Amount = document.getElementById("expense-amount");
let expense_Category = document.getElementById("categories");
let expense_Date = document.getElementById("expense-date");
let template = document.querySelector("#expense-row");
let tbody = document.querySelector("tbody");
let clone;
let add_Budget = document.getElementById("sumbit-total-budget");
let add_Expense = document.getElementById("submit-expense");
let table = document.querySelector("table");

add_Budget.addEventListener('click', (e) => {
    e.preventDefault();
    // for error handling of budget feild
    if (budget_Amount.value === "" || budget_Amount.value === NaN || budget_Amount.value <= "0") {
        error[0].classList.add('error-show');
        budget_Amount.classList.add('input-error');
    }

    else {
        show_Budget.innerText = +budget_Amount.value;
        show_Balance.innerText = +budget_Amount.value - +show_Expenses.innerText;
        budget_Amount.value = '';
        error[0].classList.remove('error-show');
        budget_Amount.classList.remove('input-error');
    }
});



add_Expense.addEventListener('click', (e) => {
    e.preventDefault();
    // for error handling of expense name feild
    if (expense_Name.value === '' || /\d/.test(expense_Name.value)) {
        error[1].classList.add('error-show');
        expense_Name.classList.add('input-error');
    }

    // for error handling of expense amount feild
    else if (+expense_Amount.value <= 0 || expense_Amount.value === NaN || expense_Amount.value === "") {
        error[2].classList.add('error-show');
        expense_Amount.classList.add('input-error');
    }

    // for error handling of expense category feild
    else if (expense_Category.value == "--Select" || expense_Category.value === "") {
        error[3].classList.add('error-show');
        expense_Category.classList.add('input-error');
    }

    // for error handling of expense date feild
    else if (expense_Date.value === "") {
        error[4].classList.add('error-show');
        expense_Date.classList.add('input-error');
    }

    else {
        clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll('td');
        td[0].innerText = expense_Name.value;
        td[1].innerText = +expense_Amount.value;
        td[2].innerText = expense_Category.value;
        td[3].innerText = expense_Date.value;
        tbody.appendChild(clone);
        show_Expenses.innerText = +show_Expenses.innerText + +expense_Amount.value;
        show_Balance.innerText = +show_Balance.innerText - +expense_Amount.value;
        error[1].classList.remove('error-show');
        expense_Name.classList.remove('input-error');
        error[4].classList.remove('error-show');
        expense_Date.classList.remove('input-error');
        error[3].classList.remove('error-show');
        expense_Category.classList.remove('input-error');
        error[2].classList.remove('error-show');
        expense_Amount.classList.remove('input-error');
        expense_Name.value = '';
        expense_Amount.value = '';
        expense_Category.value = '';
        expense_Date.value = '';
    }
});


table.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteRow')) {
        show_Balance.innerText = +show_Balance.innerText + +e.target.closest('tr').children[1].innerText;
        show_Expenses.innerText = +show_Expenses.innerText - +e.target.closest('tr').children[1].innerText;
        e.target.closest('tr').remove();
    }
});


table.addEventListener('click', (e) => {
    if (e.target.classList.contains('editRow')) {
        show_Balance.innerText = +show_Balance.innerText + +e.target.closest('tr').children[1].innerText;
        show_Expenses.innerText = +show_Expenses.innerText - +e.target.closest('tr').children[1].innerText;
        expense_Name.value = e.target.closest('tr').children[0].innerText;
        expense_Amount.value = e.target.closest('tr').children[1].innerText;
        expense_Category.value = e.target.closest('tr').children[2].innerText;
        expense_Date.value = e.target.closest('tr').children[3].innerText;
        expense_Name.focus();
        e.target.closest('tr').remove();
    }
});




