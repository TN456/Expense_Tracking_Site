import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import Base from "./Base";
import ExpenseService from "../services/ExpenseService";


class ListExpensesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
    };
  }

  componentDidMount() {
  ExpenseService.getExpenses().then((res) => {
    this.setState({ expenses: res.data });
  });
  }



  render() {
    return (
       <Base>
      <div>
        <h2 className="text-center">Expense List</h2>
        <div className="row">
          <NavLink to="/user/add">
            <button className="btn btn-primary" size="md" > Add Expense </button>
            </NavLink>
        </div>
        <br></br>
        <br></br>
        <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Name</th>
                  <th> Price</th>
                  <th> Category</th>
                  <th> Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.expenses.map((expense) => (
                  //Database variable names
                  <tr key={expense.id}>
                    <td> {expense.name} </td>
                    <td> {expense.amount}</td>
                    <td> {expense.category}</td>
                    <td> {expense.date} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
      </Base> 
    );
  }
}

export default ListExpensesComponent;


































































































































































































































// class ListExpensesComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       expenses: [],
//     };
//     // this.addExpense = this.addExpense.bind(this);
//     this.editExpense = this.editExpense.bind(this);
//     // this.deleteExpense = this.deleteExpense.bind(this);
//     // this.generateReport = this.generateReport.bind(this);
//   }

//   componentDidMount() {
//   //   let user = JSON.parse(localStorage.getItem('data'));
//   //   const token1 = user.jwtToken;
//   //   axios.get("http://localhost:8080/api/v1/expenses",{ headers:  {"Authorization" : `Bearer ${token1}`}})
//   //   .then((res)=>{
//   //   console.log(res)
//   //   this.setState({expenses:res.data})
//   //  });

//   ExpenseService.getExpenses().then((res) => {
//     this.setState({ expenses: res.data });
//   });
//   }

//   // addExpense(){
//   //   this.props.history.push(`/user/add`);
//   // }

//   editExpense(id){
//     this.props.history.push(`/update/${id}`)
//   }


//   // deleteExpense(id){
//   //   ExpenseService.deleteExpense(id).then(res=>{
//   //     this.setState({expenses: this.state.expenses.filter(expense => expense.id!==id)});
//   //   })
//   // }


//   // viewExpense(id){
//   //   this.props.history.push(`/view-expenses/${id}`)
//   // }


//   // generateReport(category){
//   //   this.props.history.push(`/generate-report/${category}`)
//   //   }

//   render() {
//     return (
//        <Base>
//       <div>
//         <h2 className="text-center">Expense List</h2>
//         <div className="row">
//           <NavLink to="/add">
//             <button className="btn btn-primary" size="md" > Add Expense </button>
//             </NavLink>
//         </div>
//         <br></br>
//         <br></br>
//         <div className="row">
//             <table className="table table-striped table-bordered">
//               <thead>
//                 <tr>
//                   <th> Name</th>
//                   <th> Price</th>
//                   <th> Category</th>
//                   <th> Date</th>
//                   {/* <th> Actions</th> */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.expenses.map((expense) => (
//                   //Database variable names
//                   <tr key={expense.id}>
//                     <td> {expense.name} </td>
//                     <td> {expense.amount}</td>
//                     <td> {expense.category}</td>
//                     <td> {expense.date} </td>
//                     {/* format="DD/MM/YYYY"</td> */}
//                     {/* <td>
//                       <button onClick={ () => this.editExpense(expense.id)} className="btn btn-info">Update </button>
//                       <button style={{marginLeft: "10px"}} onClick={ () => this.deleteExpense(expense.id)} className="btn btn-danger">Delete </button>
//                       <button style={{marginLeft: "10px"}} onClick={ () => this.viewExpense(expense.id)} className="btn btn-info">View </button>
//                       </td>                 */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//       </div>
//       </Base> 
//     );
//   }
// }

// export default ListExpensesComponent;
