import axios from 'axios';
const EXPENSE_API_BASE_URL = "http://localhost:8080/api/v1/expenses";
// let user = JSON.parse(localStorage.getItem('data'));
// const token1 = user.jwtToken;

class ExpenseService{
    
    getExpenses(){
        let user = JSON.parse(localStorage.getItem('data'));
        const token1 = user.jwtToken;
        return axios.get(EXPENSE_API_BASE_URL,{ headers:  {"Authorization" : `Bearer ${token1}`}});
    }

    createExpense(expense){
        let user = JSON.parse(localStorage.getItem('data'));
const token1 = user.jwtToken;
        return axios.post(EXPENSE_API_BASE_URL, expense,{ headers:  {"Authorization" : `Bearer ${token1}`}});
    }

    getExpenseById(expenseId){
        let user = JSON.parse(localStorage.getItem('data'));
const token1 = user.jwtToken;
        return axios.get(EXPENSE_API_BASE_URL + '/' + expenseId,{ headers:  {"Authorization" : `Bearer ${token1}`}});
    }

    updateExpense(expense, expenseId){
        let user = JSON.parse(localStorage.getItem('data'));
const token1 = user.jwtToken;
        return axios.put(EXPENSE_API_BASE_URL + '/' + expenseId, expense,{ headers:  {"Authorization" : `Bearer ${token1}`}});
    }

    deleteExpense(expenseId){
        let user = JSON.parse(localStorage.getItem('data'));
const token1 = user.jwtToken;
        return axios.delete(EXPENSE_API_BASE_URL + '/' + expenseId,{ headers:  {"Authorization" : `Bearer ${token1}`}});
    }

    // getExpenseByCategory(expenseCategory){
    //     return axios.get(EXPENSE_API_BASE_URL,+ '/' + {params: expenseCategory});
    // }
}

export default new ExpenseService()