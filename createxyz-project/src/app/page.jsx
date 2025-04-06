"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header with Logo and Download Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
        <div className="flex items-center">
          <img
            src="https://ucarecdn.com/9bfec375-ebc6-4222-bf29-fada8859fe94/-/format/auto/"
            alt="GoAround Logo"
            className="h-16 w-16 invert brightness-200"
          />
          <span className="text-4xl font-bold ml-3">
            <span className="text-white">GoAround</span>
          </span>
        </div>

        <div>
          <a
            href="/downloads/GoAround.apk"
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <span>📱 Download App</span>
          </a>
        </div>
      </div>

      <p className="text-gray-400 text-xl mb-12">
        Your Ultimate Travel Companion
      </p>

      {/* Team Members Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">T.V Sujith Gopi</h3>
            <p className="text-gray-400">Team Lead</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">M.M Navadeep</h3>
            <p className="text-gray-400">Developer</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">T. Aditya</h3>
            <p className="text-gray-400">Developer</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">M Haritha Reddy</h3>
            <p className="text-gray-400">Developer</p>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-gray-800"></div>

        {/* Version entries */}
        <div className="space-y-24">
          {/* Version 1.0.0 */}
          <div className="relative">
            <div className="flex items-start gap-12">
              <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm w-[100px] text-center">
                1.0.0
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 -ml-[22px] relative z-10"></div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-6">Initial Release</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="font-medium mb-2">
                      TripAdvisor Integration
                    </h3>
                    <p>
                      Seamless integration with TripAdvisor for comprehensive
                      hotel and attraction searches worldwide.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Location Photos</h3>
                    <p>
                      High-quality photo galleries for destinations, helping
                      travelers make informed decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Search Capabilities</h3>
                    <p>
                      Advanced search functionality with filters for better
                      travel planning.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg mt-8">
                    <h4 className="text-sm font-medium mb-2">Key Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Real-time TripAdvisor data integration</li>
                      <li>• Responsive design for all devices</li>
                      <li>• Fast and efficient search results</li>
                      <li>• Comprehensive location information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Version 0.9.0 */}
          <div className="relative">
            <div className="flex items-start gap-12">
              <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm w-[100px] text-center">
                0.9.0
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 -ml-[22px] relative z-10"></div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-6">Beta Release</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="font-medium mb-2">Core Development</h3>
                    <p>
                      Foundation of the GoAround platform with essential travel
                      search features.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">User Interface</h3>
                    <p>
                      Modern, intuitive interface design focused on user
                      experience.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg mt-8">
                    <h4 className="text-sm font-medium mb-2">
                      Development Milestones
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Basic search implementation</li>
                      <li>• UI/UX framework establishment</li>
                      <li>• Initial API integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;