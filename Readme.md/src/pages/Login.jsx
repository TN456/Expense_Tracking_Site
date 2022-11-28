import React, { useState } from "react";
import Base from "../Components/Base";
import { toast } from "react-toastify";
import { login } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const navigate=useNavigate()

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualvalue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualvalue,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    //validation

    if(loginDetail.email.trim()==='' || loginDetail.password.trim()===''){
      toast.error("Email or Password is required!!!");
    }

    localStorage.setItem("login",JSON.stringify(loginDetail));
    //Submit the form to generate token
    login(loginDetail).then((data)=>{
      
      // console.log(data)

      //Save the data to localStorage
      doLogin(data,()=>{
        console.log("Login detail is saved to localstorage")
      })
      //Redirect to dashboard
      navigate("/user/dashboard")
      
      toast.success("Login successful")
    }).catch(error=>{
      console.log(error)
      if(error.response.status===400 || error.response.status===404 || error.response.status===500){
        toast.error(error.response.data.message)
      }
      else{
        toast.error("Something went wrong on server!!!")
      }
    })
  };


  // Reseting the form
  const resetData = () => {
    setLoginDetail({
      email: "",
      password: "",
    });
  };

  return (
    <Base>
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Login</h3>
              <div className="card-body">
                <form>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Email"
                      name="Email"
                      value={loginDetail.email}
                      onChange={(e) => handleChange(e, "email")}
                      className="form-control"
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="Password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                      className="form-control"
                    />
                  </div>

                  <br></br>
                  <button className="btn btn-success" onClick={submitForm}>
                    Login
                  </button>
                  <button
                    className="btn btn-secondary"
                    // onClick={this.cancel.bind(this)}
                    onClick={resetData}
                    type="reset"
                    style={{ marginLeft: "10px" }}
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default Login;
