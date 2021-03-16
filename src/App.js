import "./App.css";
import { Navbar } from "./components/landing-page/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/landing-page/Hero";

function App() {
  // const PageNotFound = () => {
  //   <div>404!</div>;
  // };
  return (
    <Router>
      <Navbar />
      <Hero />
      {/* <Route component={PageNotFound} /> */}
    </Router>
  );
}

export default App;
