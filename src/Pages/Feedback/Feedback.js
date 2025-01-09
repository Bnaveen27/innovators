import React from "react";
import "./Feedback.css";

const Feedback = () => (
  <div className="feed-container">
    <div className="heading">
      <h1 className="feed-title">Feedback Form</h1>
    </div>
    <table className="feedback-table">
      <thead>
        <tr>
          <th>Questions</th>
          <th>Excellent-5</th>
          <th>Very Good-4</th>
          <th>Good-3</th>
          <th>Satisfied-2</th>
          <th>Not Satisfied-1</th>
        </tr>
      </thead>
      <tbody>
        {[
          "Quality of the programme",
          "Motivational aspects",
          "Relevance of the title",
          "How interactive the session was",
          "Organisation of the programme",
        ].map((question, index) => (
          <tr key={index}>
            <td>{question}</td>
            {[...Array(5)].map((_, i) => (
              <td key={i}>
                <input type="radio" name={`q${index}`} value={i + 1} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    <div className="suggestions">
      <p>Suggestions:</p>
      <textarea placeholder="Write your suggestions here..." />
      <button type="submit">Submit</button>
    </div>

  </div>
);

export default Feedback;
