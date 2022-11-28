import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import Base from "../Components/Base";

const Signup = () => {

  const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    password: "",
  });

  // const [setError] = useState({
  //   errors: {},
  //   isError: false,
  // });

  useEffect(() => {
    console.log(data);
  }, [data]);

  //handle change
  const handleChange = (event, property) => {
    //dynamic setting of values
    setData({ ...data, [property]: event.target.value });
  };

  // Reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      phoneno: "",
      address: "",
      password: "",
    });
  };

  //Submit the form
  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);

    //data validate 
    if(data.name.trim()===''){
      toast.error(" Name field is required!", {
        position: "top-center",
      });
    }
    else if(data.email.trim()===''){
      toast.error(" Email field is required!", {
        position: "top-center",
      });
    }
    else if(!data.email.endsWith("@gmail.com")){
      toast.error(" Email id is wrong!", {
        position: "top-center",
      });
    }
    else if(data.phoneno.trim()===''){
      toast.error(" Phone number field is required!", {
        position: "top-center",
      });
    }
    else if (data.phoneno.length < 10) {
      toast.error("Phone Number should be of 10 digits");
    }
    else if (data.phoneno.length > 10) {
      toast.error("Phone Number should be of 10 digits");
    }
    else if(data.address.trim()===''){
      toast.error(" Address field is required!", {
        position: "top-center",
      });
    }
    else if(data.password.trim()===''){
      toast.error(" Password field is required!", {
        position: "top-center",
      });
    }
    else if(data.password.length < 8){
      toast.error(" Password should greater than 8 characters!", {
        position: "top-center",
      });
    }
    //call server api for sending data

    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        localStorage.setItem("signup",JSON.stringify(data));
        navigate("/login")
        toast.success("User is registered successfully with id : " + resp.id);
        setData({
          name: "",
          email: "",
          phoneno: "",
          address: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
      if(error.response.status===409 || error.response.status===404 || error.response.status===500){
        toast.error(error.response.data.message)
      }
      else{
        toast.error("Something went wrong on server!!!")
      }
      });
  };


  return (
    <>
      <Base>
        <br></br>
        <Container>
          <h3 className="text-center">Fill Details to Register</h3>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="registration-form"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={data.name}
              onChange={(e) => handleChange(e, "name")}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              type="email"
              value={data.email}
              label="Email Address"
              onChange={(e) => handleChange(e, "email")}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneno"
              name="phoneno"
              value={data.phoneno}
              label="Phone Number"
              type="text"
              onChange={(e) => handleChange(e, "phoneno")}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              name="address"
              label="Address"
              type="text"
              value={data.address}
              onChange={(e) => handleChange(e, "address")}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={data.password}
              onChange={(e) => handleChange(e, "password")}
            />{" "}
            <FormControlLabel
              control={
                <Checkbox value="agree" color="primary" name="tc" id="tc" />
              }
              label="I agree to term and condition."
            />
            <Box textAlign="center">
              <Button
                type="submit"
                onClick={submitForm}
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                SignUp{" "}
              </Button>{" "}
              <Button
                type="reset"
                onClick={resetData}
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Reset{" "}
              </Button>{" "}
              <p className="mt-3">
                {" "}
                {""}
                Already Have an Account{" "}
                <span>
                  {" "}
                  {""} <NavLink to="/login"> Login </NavLink>{" "}
                </span>{" "}
                {""}{" "}
              </p>{" "}
              {""}{" "}
            </Box>{" "}
            {/* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""} */}{" "}
          </Box>{" "}
          <ToastContainer />
        </Container>
      </Base>
    </>
  );
};

export default Signup;
