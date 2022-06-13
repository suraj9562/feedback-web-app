import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackContextProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackContextProvider>
      <Router>
        <Header
          text="Feedback UI"
          styleProp={{ color: "#ff6a95", backgroundColor: "rgba(0,0,0,0.4)" }}
        />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackContextProvider>
  );
}

export default App;
