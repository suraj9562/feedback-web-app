import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, deleteFeedback }) {
  return (
    <>
      {!feedback && <p>No Feedback Yet....!!</p>}

      <div className="feedback-list">
        <AnimatePresence>
          {feedback &&
            feedback.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <FeedbackItem
                  key={item.id}
                  {...item}
                  deleteFeedback={deleteFeedback}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default FeedbackList;
