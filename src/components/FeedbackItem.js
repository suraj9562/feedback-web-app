import React from "react";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ rating, text, deleteFeedback, id }) {
  return (
    <>
      <Card reverse={true}>
        <div className="num-display"> {rating} </div>
        <button
          className="close"
          onClick={() => {
            deleteFeedback(id);
          }}
        >
          <FaTimes color="purple" />
        </button>
        <button className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display"> {text} </div>
      </Card>
    </>
  );
}

export default FeedbackItem;
