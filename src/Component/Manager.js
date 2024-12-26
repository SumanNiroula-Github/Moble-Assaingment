import React, { useEffect, useState } from "react";
import { FaStar, FaTrashAlt } from "react-icons/fa"; // Import star and trash icons
import { Link } from "react-router-dom"; // For navigation

const Manager = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const response = await fetch("http://localhost:5000/api/ideas/ideas");
      const data = await response.json();

      const ideasWithLabels = data.map((idea) => ({
        ...idea,
        isAIFiltered: Math.random() < 0.5, // Randomly set as true or false
        isRewarded: false,
        isStarPopped: false, // Track whether the star has been clicked
      }));

      setIdeas(ideasWithLabels);
    };

    fetchIdeas();
  }, []);

  // Handle reward for an idea (UI only change)
  const handleReward = (id) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea._id === id
          ? { ...idea, isRewarded: !idea.isRewarded, isStarPopped: true }
          : idea
      )
    );

    setTimeout(() => {
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea.isStarPopped ? { ...idea, isStarPopped: false } : idea
        )
      );
    }, 1000);
  };

  // Handle deleting an idea
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/ideas/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the deleted idea from the state (UI update)
        setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea._id !== id));
      } else {
        console.error("Failed to delete the idea.");
      }
    } catch (error) {
      console.error("Error deleting the idea:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-indigo-600 relative">
        {/* Logo Button on top-right */}
        <Link to="/login" className="absolute right-4 top-4">
          <button
            className="text-white text-xl font-bold bg-black px-8 py-2 rounded-full"
            style={{
              borderRadius: "12px", // Round the corners of the button
              padding: "8px 16px", // Padding for better spacing
            }}
          >
            Logout
          </button>
        </Link>

        {/* Centered Heading */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Manager Dashboard
        </h1>

        {/* Center the ideas grid */}
        <div className="flex justify-center">
          {/* Idea Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Loop through each idea */}
            {ideas.map((idea) => (
              <div
                key={idea._id}
                className={`flex flex-col p-6 border rounded-md shadow-md bg-white mb-4 relative`} // Add relative positioning for delete button
                style={{
                  maxWidth: "450px", // Increased max-width for a larger container
                  minHeight: "350px", // Increased min-height for more vertical space
                }}
              >
                {/* Left: Idea details */}
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">
                      {idea.employeeName}
                    </h2>
                    {/* Department name beside employee name */}
                    <span
                      className="text-md text-gray-600 font-semibold"
                      style={{
                        backgroundColor: "#4C51BF",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        color: "white",
                      }}
                    >
                      {idea.department}
                    </span>
                  </div>
                  <p className="text-md mt-2">{idea.idea}</p>
                </div>

                {/* Bottom section with flex layout */}
                <div className="flex justify-between items-center mt-auto">
                  {/* Star Button */}
                  <button
                    onClick={() => handleReward(idea._id)}
                    className={`text-white ${
                      idea.isRewarded ? "bg-yellow-500" : "bg-gray-300"
                    } text-2xl p-3 rounded-full transition duration-300 ease-in-out transform ${
                      idea.isStarPopped ? "animate-star-pop" : ""
                    }`}
                  >
                    <FaStar />
                  </button>

                  {/* Votes */}
                  <span className="text-lg font-bold text-gray-700">
                    {idea.votes} Votes
                  </span>

                  {/* AI Filter Label */}
                  <span
                    className="inline-block px-3 py-1 text-white rounded-full font-bold"
                    style={{
                      backgroundColor: idea.isAIFiltered
                        ? "#4C51BF"
                        : "#E53E3E", // Indigo for AI filtered, red for not
                    }}
                  >
                    {idea.isAIFiltered ? "AI Filtered" : "Not AI Filtered"}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(idea._id)}
                    className="text-red-600 hover:text-red-800 text-2xl"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes starPopAnimation {
          0% {
            transform: scale(1); /* Start with the normal size */
          }
          50% {
            transform: scale(1.5); /* Grow to 1.5x the size */
          }
          100% {
            transform: scale(1); /* Return to normal size */
          }
        }

        .animate-star-pop {
          animation: starPopAnimation 1s ease-out; /* Apply the pop effect on star click */
        }
      `}</style>
    </>
  );
};

export default Manager;
