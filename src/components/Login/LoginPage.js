import "./loginPage.css";
import animeAll from "../FirstPage/animeAll.mp4";
import SigninForm from "./SigninForm";
import demonSlayer from "../FirstPage/demonSlayer.mp4";
import zenitsu from "../FirstPage/zenitsu.mp4";
import Footer from "../Footer/Footer";
import Nav from "../MainPage/Nav";
const LoginPage = () => {
  return (
    <div className="main-login">
      <div className="overlay-login"></div>
      <Nav/>
      <SigninForm />
  
    </div>
  );
};
export default LoginPage;
