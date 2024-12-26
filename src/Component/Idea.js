import React, { useState, useEffect } from "react";
import Header from "./Header";
import idea from "../Assets/ideas.png"; // Add your image path here

const SubmitIdea = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    department: "",
    idea: "",
  });
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [modalAnimation, setModalAnimation] = useState(""); // Modal animation state

  const departments = [
    "HR",
    "Sales",
    "Marketing",
    "Development",
    "Design",
    "Support",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new idea object to send to the backend
    const ideaData = {
      employeeName: formData.employeeName,
      department: formData.department,
      idea: formData.idea,
    };

    try {
      // Make a POST request to the backend to save the idea
      const response = await fetch("http://localhost:5000/api/ideas/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaData), // Send the data as JSON
      });

      if (response.ok) {
        setMessage("Idea submitted successfully!");
        setIsModalOpen(true); // Open the modal
        setModalAnimation("animate__fadeIn"); // Set fadeIn animation
        setFormData({
          employeeName: "",
          department: "",
          idea: "",
        });
      } else {
        setMessage("Failed to submit idea. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting idea:", err);
      setMessage("Error: Could not submit idea. Please try again.");
    }
  };

  // Close modal with fade-out animation after 2 seconds
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setModalAnimation("animate__fadeOut"); // Set fadeOut animation
        // Wait for animation to finish before closing modal
        setTimeout(() => setIsModalOpen(false), 1000);
      }, 2000); // After 2 seconds, start the fadeOut animation
    }
  }, [isModalOpen]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        {/* Main container with flexbox */}
        <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
          {/* Left side: Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white bg-opacity-90 p-6">
            <div className="w-full max-w-md">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Idea Submission
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="employeeName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Department Dropdown */}
                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Idea Text Area */}
                <div>
                  <label
                    htmlFor="idea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Idea
                  </label>
                  <textarea
                    id="idea"
                    name="idea"
                    value={formData.idea}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
                >
                  Submit Idea
                </button>
              </form>
            </div>
          </div>

          {/* Right side: Image */}
          <div
            className="w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${idea})`,
              height: "50vh", // Set full height
            }}
          ></div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={`bg-white p-10 rounded-lg shadow-xl ${modalAnimation} animate__faster`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center">Success</h2>
            <p className="text-center mt-2">{message}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubmitIdea;
