import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ListComponent from "./Components/ListComponent";
import AddExpenseComponent from "./Components/AddExpenseComponent";
import ViewExpenseComponent from "./Components/ViewExpenseComponent";
import UpdateExpenseComponent from "./Components/UpdateExpenseComponent";
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="dashboard" element={<ListComponent />} />
          <Route path="add" element={<AddExpenseComponent />} />
        </Route>
        <Route path="/view/:id" element={<ViewExpenseComponent />} />
        <Route path="/update/:id" element={<UpdateExpenseComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
