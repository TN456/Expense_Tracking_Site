import React from "react";
import Base from "./Base";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AddExpense } from "../services/expense-service";

const AddExpenseComponent = () => {


  const navigate=useNavigate()

  const [data, setData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });


  useEffect(() => {
    console.log(data);
  }, [data]);

  //handle change
  const handleChange = (event, property) => {
    //dynamic setting of values
    setData({ ...data, [property]: event.target.value });
  };



  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);

    if(data.name===''){
      toast.error(" Expense name field is required!", {
        position: "top-center",
      });
    }
    else if(data.name.length<5){
      toast.error(" Expense name should be greater than 5 characters!", {
        position: "top-center",
      });
    }
    else if(data.amount===''){
      toast.error(" Amount field is required!", {
        position: "top-center",
      });
    }
    else if(data.category===''){
      toast.error(" Category field is required!", {
        position: "top-center",
      });
    }
    else if(data.date===''){
      toast.error(" Date field is required!", {
        position: "top-center",
      });
    }


    AddExpense(data)
      .then((resp)=>{
        console.log(resp);
        console.log("success log");
        navigate("/user/dashboard")

        toast.success("Expense added successfully!!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
      });


      
  }

  return (
    <Base>
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Expense</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      required
                      value={data.name}
                      onChange={(e) => handleChange(e, "name")}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="Price"
                      name="amount"
                      className="form-control"
                      required
                      value={data.amount}
                      onChange={(e) => handleChange(e, "amount")}
                    />
                  </div>
                  <div className="form-group">
                    <label for="category"> Category: </label>
                    <select
                      class="form-control"
                      id="Category"
                      value={data.category}
                      required
                      onChange={(e) => handleChange(e, "category")}
                    >
                      <option value=""></option>
                      <option value="Food">Food</option>
                      <option value="Toys">Toys</option>
                      <option value="Stationary">Stationary</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Education">Education</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Medicine">Medicine</option>
                      <option value="Groceries">Groceries</option>
                      <option value="House Utilities">House Utilities</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Date: </label>{" "}
                    <input
                      placeholder="Date"
                      type="date"
                      name="date"
                      className="form-control"
                      required
                      value={data.date}
                      onChange={(e) => handleChange(e, "date")}
                    />{" "}
                  </div>
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={submitForm}
                  >
                    Save
                  </button>
                  <NavLink to="/dashboard">
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button></NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Base>
  );
};

export default AddExpenseComponent;

















































































































































// class AddExpenseComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       amount: "",
//       category: "",
//       date: "",
//     };

//     this.changeNameHandler = this.changeNameHandler.bind(this);
//     this.changePriceHandler = this.changePriceHandler.bind(this);
//     this.changecategoryHandler = this.changecategoryHandler.bind(this);
//     this.changeDateHandler = this.changeDateHandler.bind(this);
//     this.saveOrUpdateExpense = this.saveOrUpdateExpense.bind(this);
//   }

//   saveOrUpdateExpense = (e) => {
//     e.preventDefault();
//     let expense = {
//       name: this.state.name,
//       amount: this.state.amount,
//       category: this.state.category,
//       date: this.state.date,
//     };

//     // axios.post("http://localhost:8080/api/v1/expenses", expense,{ headers: {"Authorization" : `Bearer ${token}`}});
//     // ExpenseService.createExpense(expense).then((res) => {
//     //   this.props.history.push("/dashboard");
//     // });

//     // toast.success("Expense added successfully")
//     let user = JSON.parse(localStorage.getItem('data'));
//     const token1 = user.jwtToken;

   
//     axios.post("http://localhost:8080/api/v1/expenses", expense,{ headers:  {"Authorization" : `Bearer ${token1}`}})
//     .then((res) => {
//       this.props.history.push("/dashboard");
//     });
//     toast.success("Expense added successfully")


//   };

 
//   changeNameHandler = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   changePriceHandler = (event) => {
//     this.setState({ amount: event.target.value });
//   };

//   changecategoryHandler = (event) => {
//     this.setState({ category: event.target.value });
//   };

//   changeDateHandler = (event) => {
//     this.setState({ date: event.target.value });
//   };

//   cancel() {
//     this.props.history.push("/dashboard");
//   }

//   render() {
//     return (
//       <Base>
//       <div>
//         <br></br>
//         <div className="container">
//           <div className="row">
//             <div className="card col-md-6 offset-md-3 offset-md-3">
//               <h3 className="text-center">Add Expense</h3>
//               <div className="card-body">
//                 <form>
//                   <div className="form-group">
//                     <label> Name: </label>
//                     <input
//                       placeholder="Name"
//                       name="name"
//                       className="form-control"
//                       required
//                       value={this.state.name}
//                       onChange={this.changeNameHandler}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label> Price: </label>
//                     <input
//                       placeholder="Price"
//                       name="amount"
//                       className="form-control"
//                       required
//                       value={this.state.amount}
//                       onChange={this.changePriceHandler}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label for="category"> category: </label>
//                     <select
//                       class="form-control"
//                       id="category"
//                       value={this.state.category}
//                       required
//                       onChange={this.changecategoryHandler}
//                     >
//                       <option value="Food">Food</option>
//                       <option value="Toys">Toys</option>
//                       <option value="Stationary">Stationary</option>
//                       <option value="Electronics">Electronics</option>
//                       <option value="Education">Education</option>
//                       <option value="Insurance">Insurance</option>
//                       <option value="Clothing">Clothing</option>
//                       <option value="Transportation">Transportation</option>
//                       <option value="Medicine">Medicine</option>
//                       <option value="Groceries">Groceries</option>
//                       <option value="House Utilities">House Utilities</option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label> Date: </label>{" "}
//                     <input
//                       placeholder="Date"
//                       type="date"
//                       name="date"
//                       className="form-control"
//                       required
//                       value={this.state.date}
//                       onChange={this.changeDateHandler}
//                     />{" "}
//                   </div>
//                   <br></br>
//                   <button
//                     className="btn btn-success"
//                     onClick={this.saveOrUpdateExpense}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={this.cancel.bind(this)}
//                     style={{ marginLeft: "10px" }}
//                   >
//                     Cancel
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </Base>
//     );
//   }
// }

// export default AddExpenseComponent;


























