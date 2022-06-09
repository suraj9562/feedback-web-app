import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    const newReviews = [...feedback, newFeedback];
    setFeedback(newReviews);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
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
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteFeedback={deleteFeedback}
                />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );
}

export default App;
