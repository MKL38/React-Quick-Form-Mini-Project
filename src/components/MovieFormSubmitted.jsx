import React from "react";


function SurveySuccess({ name, email, selectedMovie, onNewSurvey }) {
  return (
    <div className="max-w-md mx-auto shadow-md overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-6 text-xl font-semibold flex flex-row">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-film h-6 w-6 mr-3 mt-[2px]"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg></div>
        Movie Survey
      </div>

      <div className="bg-white p-6">
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700 mb-4">
          {/* Success Title with Icon */}
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold">ส่งแบบสำรวจสำเร็จ!</span>
          </div>
          {/* User Data */}
          <p className="mb-1">
            <span className="font-semibold text-gray-700">ชื่อ:</span> {name}
          </p>
          <p className="mb-1">
            <span className="font-semibold text-gray-700">อีเมล:</span> {email}
          </p>
          <p>
            <span className="font-semibold text-gray-700">ภาพยนตร์ที่เลือก:</span>{" "}
            {selectedMovie}
          </p>
        </div>

        {/* New Survey Button */}
        <button
          onClick={onNewSurvey}
          className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          ทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
}

export default SurveySuccess;
