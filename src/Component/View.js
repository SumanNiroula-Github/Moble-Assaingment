import React, { useEffect, useState } from "react";
import Header from "./Header";
import { FaThumbsUp } from "react-icons/fa"; // Import thumbs up icon

const View = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    // Fetch ideas from the backend
    const fetchIdeas = async () => {
      const response = await fetch("http://localhost:5000/api/ideas/ideas");
      const data = await response.json();

      // Add a random AI filter label to each idea
      const ideasWithLabels = data.map((idea) => ({
        ...idea,
        isAIFiltered: Math.random() < 0.5, // Randomly set as true or false
      }));

      setIdeas(ideasWithLabels);
    };

    fetchIdeas();
  }, []);

  // Handle vote for an idea
  const handleVote = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/ideas/ideas/${id}`,
      {
        method: "PUT",
      }
    );

    if (response.ok) {
      const updatedIdea = await response.json();
      // Update the local state to reflect the new vote count
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === id ? { ...idea, votes: updatedIdea.votes } : idea
        )
      );
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Submitted Ideas</h1>

        <div className="space-y-6">
          {/* Loop through each idea */}
          {ideas.map((idea) => (
            <div
              key={idea._id}
              className="p-6 border rounded-md shadow-md bg-white"
            >
              <div className="flex justify-between items-center">
                {/* Left: Idea details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{idea.employeeName}</h2>
                  <p className="text-md text-gray-700 mt-2">{idea.idea}</p>

                  {/* Department with indigo background and bold font */}
                  <span
                    className="inline-block mt-2 px-3 py-1 text-white rounded-full font-bold"
                    style={{ backgroundColor: "#4C51BF" }} // indigo-600 background
                  >
                    {idea.department}
                  </span>
                </div>

                {/* Right: Vote button and AI Filtered label */}
                <div className="flex flex-col items-center justify-center ml-6">
                  <button
                    onClick={() => handleVote(idea._id)}
                    className="text-white bg-indigo-600 hover:bg-indigo-800 text-3xl p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <FaThumbsUp />
                  </button>
                  <span className="text-lg font-bold text-gray-700 mt-2">
                    {idea.votes} Votes
                  </span>

                  {/* AI Filtered label */}
                  <span
                    className="inline-block mt-2 px-3 py-1 text-white rounded-full font-bold"
                    style={{
                      backgroundColor: idea.isAIFiltered
                        ? "#4C51BF"
                        : "#E53E3E", // Indigo for AI filtered, red for not
                    }}
                  >
                    {idea.isAIFiltered ? "AI Filtered" : "Not AI Filtered"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default View;
