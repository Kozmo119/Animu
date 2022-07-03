import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import StoryCard from "./components/FirstPage/StoryCard";
import { Switch, router, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import HomeScreen from "./components/MainPage/HomeScreen";
import Footer from "./components/Footer/Footer";
import Nav from "./components/MainPage/Nav";
import Profile from "./components/Profile/Profile";
import RenderedAnimeList from "./components/MainPage/RenderedAnime/RenderedAnimeList";
function App() {
  return (
    <Switch>
      
      <Route path="/" exact>
        <div className="main">
          <Navbar />
          <StoryCard />
        </div>
      </Route>

      <Route path="/login">
        <LoginPage />
        <Footer />
      </Route>
      <Route path="/homepage" exact>
        <HomeScreen />
        <Footer />
      </Route>
      <Route path="/profile">
        <Profile />
        <Footer/>
      </Route>
      <Route path="/homepage/:animeName">
        <RenderedAnimeList/>
      
      </Route>
    </Switch>
  );
}

export default App;

{
  /* <TextField
id="filled-basic"
label="Email address"
variant="filled"
style={{
  backgroundColor: "white",
  width: "45%",
}}
/>
<br />
<Button
size="large"
style={{
  backgroundColor: "#e81515",
  width: "10%",
  color: "white",
}}
>
Get Started
</Button> */
}
