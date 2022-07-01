import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./signInForm.css";
import { red } from "@mui/material/colors";

const SigninForm = () => {
  
  
  return (
    <div className="content-signin">
      <div className="form-border">
        {" "}
        <h1 className="header-signin">
          Sign in{" "}
          {/* <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1757px-Apple_Computer_Logo_rainbow.svg.png"
            style={{
              width: "45px",
              height: "45px",
            }}
            alt="logo"
          /> */}
        </h1>{" "}
        <br />
        <TextField
          label="Email address"
          required
          style={{
            backgroundColor: "rgba(237,241,245,.7)",
            width: "400px",
          }}
          InputLabelProps={{ style: { color: "black" } }}
          sx={{ input: { color: "black" } }}
        />{" "}
        <br /> <br /> <br />
        <TextField
          label="Password"
          type="password"
          required
          style={{
            color: "white",
            backgroundColor: "rgba(237,241,245,.7)",
            width: "400px",
          }}
          InputLabelProps={{ style: { color: "black" } }}
          sx={{ input: { color: "black" } }}
        ></TextField>
        <br />
        <br />
        <br />
        
        <Link to='/profile' style={{ textDecoration: "none" }}>
        <Button
          style={{
            borderRadius: 5,
            backgroundColor: "rgba(48,158,246)",
            fontSize: "20px",
            color: "white", 
            width: "400px",
          }}
        >
          Sign in
        </Button></Link>
      </div>
      
    </div>
  );
};

export default SigninForm;
