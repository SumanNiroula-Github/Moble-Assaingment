import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* Section 1: GreenFuture's Challenge */}
        <section className="flex flex-col md:flex-row items-center p-6 bg-gray-50 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
            <h2 className="text-4xl font-extrabold text-white bg-indigo-600 p-4 rounded-lg">
              GreenFuture: Facing a Stagnation in Innovation
            </h2>
            <p className="text-xl text-gray-700">
              GreenFuture, an environmental consulting firm based in London, has
              long been recognized for its trailblazing work in sustainability.
              With a workforce of 2,500 employees across 20 offices in 15
              countries, the company built a global reputation for innovation.
              However, by 2020, it faced a dilemma: its capacity for innovation
              had stagnated.
            </p>
            <p className="text-lg text-gray-600">
              Despite its immense creativity, new ideas were increasingly being
              lost or left undeveloped. Leadership recognized the need to unlock
              the full potential of its employees to maintain its competitive
              edge in the sustainability sector.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.w3schools.com/w3images/forest.jpg"
              alt="Green Future"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 2: Introducing IMS-Connect */}
        <section className="flex flex-col md:flex-row-reverse items-center p-6 bg-gray-50 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
            <h2 className="text-4xl font-extrabold text-white bg-indigo-600 p-4 rounded-lg">
              The Solution: IMS-Connect Innovation Management System
            </h2>
            <p className="text-xl text-gray-700">
              GreenFuture partnered with InnoSphere to launch IMS-Connect, a
              platform designed to centralize idea generation and streamline the
              innovation process. IMS-Connect enabled employees to submit ideas,
              vote on the best ones, and collaborate across global offices.
            </p>
            <p className="text-lg text-gray-600">
              With features like idea submission portals, voting systems, and
              tracking mechanisms, IMS-Connect aimed to capture, evaluate, and
              cultivate ideas effectively. The goal was to encourage
              cross-departmental collaboration and reduce barriers to
              innovation.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Technology"
              className="w-full max-w-4xl h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 3: Challenges in Implementation */}
        <section className="flex flex-col md:flex-row items-center p-6 bg-gray-50 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
            <h2 className="text-4xl font-extrabold text-white bg-indigo-600 p-4 rounded-lg">
              Challenges in Implementing IMS-Connect
            </h2>
            <p className="text-xl text-gray-700">
              While IMS-Connect had clear potential, its implementation
              uncovered several challenges. Employees were initially reluctant
              to adopt the system due to concerns about idea ownership,
              recognition, and cultural differences across regions.
            </p>
            <p className="text-lg text-gray-600">
              The platform’s wide-scale use led to issues such as uneven access
              to technology, especially in regions with unreliable internet
              connectivity. Additionally, the incentive system created
              competition rather than collaboration, impeding the very teamwork
              IMS-Connect was designed to foster.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Office Collaboration"
              className="w-full max-w-4xl h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 4: Overcoming Obstacles & Progress */}
        <section className="flex flex-col md:flex-row-reverse items-center p-6 bg-gray-50 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
            <h2 className="text-4xl font-extrabold text-white bg-indigo-600 p-4 rounded-lg">
              Overcoming Obstacles & Gaining Momentum
            </h2>
            <p className="text-xl text-gray-700">
              As the implementation progressed, GreenFuture began to refine
              IMS-Connect to address the challenges. Investments in
              infrastructure upgrades ensured employees from all regions had
              equal access to the platform, while offline submission options
              helped those in areas with poor connectivity.
            </p>
            <p className="text-lg text-gray-600">
              Furthermore, GreenFuture re-evaluated its reward system, shifting
              to team-based incentives that fostered collaboration rather than
              individualism. As these changes were made, IMS-Connect began to
              realize its potential, evidenced by the successful development of
              the urban carbon capture project, which brought together teams
              from Tokyo, Berlin, and Toronto.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.w3schools.com/w3images/forest.jpg"
              alt="City Development"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 5: The Future of Innovation at GreenFuture */}
        <section className="flex flex-col md:flex-row items-center p-6 bg-gray-50 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
            <h2 className="text-4xl font-extrabold text-white bg-indigo-600 p-4 rounded-lg">
              The Future of Innovation at GreenFuture
            </h2>
            <p className="text-xl text-gray-700">
              As GreenFuture continues to refine IMS-Connect, it remains
              committed to fostering an innovation culture that empowers
              employees across the globe. With advancements in AI-powered idea
              filtering, improved collaboration tools, and a stronger security
              framework, the company is preparing to lead the charge toward a
              more sustainable future.
            </p>
            <p className="text-lg text-gray-600">
              GreenFuture’s journey with IMS-Connect demonstrates that even the
              most forward-thinking organizations must continuously evolve to
              stay ahead in the competitive landscape. With continuous
              adjustments, IMS-Connect is poised to unlock the full creative
              potential of GreenFuture’s workforce, driving future innovation
              and success.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.w3schools.com/w3images/forest.jpg"
              alt="Green Future"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-indigo-600 p-4 text-center text-white">
        <p>&copy; 2024 GreenFuture. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
