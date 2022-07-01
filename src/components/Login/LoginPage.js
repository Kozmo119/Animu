import "./loginPage.css";
import animeAll from "../FirstPage/animeAll.mp4";
import SigninForm from "./SigninForm";
import demonSlayer from "../FirstPage/demonSlayer.mp4";
import zenitsu from "../FirstPage/zenitsu.mp4";

const LoginPage = () => {
  return (
    <div className="main-login">
      <div className="overlay-login"></div>
      <img src="https://i.redd.it/c3uhsgo1vx541.jpg" alt="background"/>
      <SigninForm />
    </div>
  );
};
export default LoginPage;
