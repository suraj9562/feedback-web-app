import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [helperText, setHelperText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      // NOTE: reset to default state after submission
      setBtnDisabled(true);
      setRating(0);
      setText("");
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={setRating} selected={rating} />
          <div className="input-group">
            <input
              type="text"
              value={text}
              placeholder="Write a review"
              onChange={(e) => {
                handleChange(e);
                if (e.target.value.length < 10) {
                  setBtnDisabled(true);
                  setHelperText("Minimum msg length should be 10.");
                } else {
                  setBtnDisabled(false);
                  setHelperText("");
                }
              }}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Submit
            </Button>
          </div>

          {helperText && <div className="message">{helperText}</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
