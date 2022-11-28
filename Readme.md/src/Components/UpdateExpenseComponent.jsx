import React, { Component } from "react";
import ExpenseService from "../services/ExpenseService";

class UpdateExpenseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      amount: "",
      category: "",
      date: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
  }

  componentDidMount() {
    ExpenseService.getExpenseById(this.state.id).then((res) => {
      let expense = res.data;
      this.setState({
        name: expense.name,
        amount: expense.amount,
        category: expense.category,
        date: expense.date,
      });
    });
  }

  updateExpense = (e) => {
    e.preventDefault();
    let expense = {
      name: this.state.name,
      amount: this.state.amount,
      category: this.state.category,
      date: this.state.date,
    };
    console.log("expense => " + JSON.stringify(expense));

    ExpenseService.updateExpense(expense, this.state.id).then((res) => {
      this.props.history.push("/dashboard");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changePriceHandler = (event) => {
    this.setState({ amount: event.target.value });
  };

  changeCategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };

  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  };

  cancel() {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Expense</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="expense_name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="Price"
                      name="expense_price"
                      className="form-control"
                      value={this.state.amount}
                      onChange={this.changePriceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="category"> Category: </label>
                    <select
                      class="form-control"
                      id="category"
                      value={this.state.category}
                      onChange={this.changeCategoryHandler}
                    >
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
                      name="expense_date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changeDateHandler}
                    />{" "}
                  </div>
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={this.updateExpense}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateExpenseComponent;
