let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses += answer
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses += answer
}

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses += answer
}