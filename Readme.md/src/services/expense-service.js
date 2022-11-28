import { privateAxios } from "./helper";

export const AddExpense=(expense)=>{
    let user = JSON.parse(localStorage.getItem('data'));
const token1 = user.jwtToken;
    return privateAxios
        .post("/expenses",expense,{ headers:  {"Authorization" : `Bearer ${token1}`}})
        .then((response)=>response.data);
}


// export const loadAllexpenses=()=>{
//     return privateAxios
//         .get("/expenses")
//         .then((response)=>response.data)
// }
















// // export const ListExpense=()=>{
// //     return 
// // }

// // import axios from "axios";
// // const EXPENSE_API_BASE_URL = "http://localhost:8080/api/v1/expenses";
// // class ExpenseService{
    
// //     getExpenses(){
// //         return axios.get(EXPENSE_API_BASE_URL);
// //     }
// //     createExpense(expense){
// //         return axios.post(EXPENSE_API_BASE_URL, expense);
// //     }

// //     getExpenseById(expenseId){
// //         return axios.get(EXPENSE_API_BASE_URL + '/' + expenseId);
// //     }

// //     updateExpense(expense, expenseId){
// //         return axios.put(EXPENSE_API_BASE_URL + '/' + expenseId, expense);
// //     }

// //     deleteExpense(expenseId){
// //         return axios.delete(EXPENSE_API_BASE_URL + '/' + expenseId);
// //     }

// //     // getExpenseByCategory(expenseCategory){
// //     //     return axios.get(EXPENSE_API_BASE_URL,+ '/' + {params: expenseCategory});
// //     // }
// // }

// // export default new ExpenseService()