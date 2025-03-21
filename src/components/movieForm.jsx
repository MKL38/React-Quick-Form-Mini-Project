import React, { useState } from "react";
import movies from "../assets/dataforForm/movies";
import SurveySuccess from "./MovieFormSubmitted"; // 

function movieForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [comment, setComment] = useState("");

  // errors and submission state 
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); 

  // Validate Email func 
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Validate Form
  function validateForm() {
    let newErrors = {};

    if (!name) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!email) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!isValidEmail(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!movie) {
      newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length; 
  }

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorCount = validateForm();
    // If form is valid (errorCount == 0), show success screen
    if (errorCount === 0) {
      console.log({ name, email, movie, comment });
      setSubmitted(true);
    }
  };

  // Reset button
  const handleReset = () => {
    setName("");
    setEmail("");
    setMovie("");
    setComment("");
  };

  // ทำแบบสำรวจใหม่"
  const handleNewSurvey = () => {
    // Clear data and go back to form
    handleReset();
    setSubmitted(false);
  };

  // If the form is submitted and valid, show the SurveySuccess screen
  if (submitted) {
    return (
      <SurveySuccess
        name={name}
        email={email}
        selectedMovie={movie}
        onNewSurvey={handleNewSurvey}
      />
    );
  }

  // Otherwise, show the survey form
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-6 text-xl font-semibold max-w-md mx-auto flex items-center ">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-film h-6 w-6 mr-3"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg></div>
        Movie Survey
      </div>

      <div className="max-w-md mx-auto p-6 bg-white shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="คุณสามารถกรอกชื่อของคุณ"
            />
            {errors.name && (
              <p className="error-message text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="error-message text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Movie Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-5">
              เลือกภาพยนตร์ที่คุณชอบ <span className="text-red-500">*</span>
            </label>
            {errors.movie && (
              <p className="error-message text-red-600">{errors.movie}</p>
            )}
            <div className="space-y-2 mt-2">
              {movies.map((movieOption) => (
                <div key={movieOption.title} className="flex items-center mt-4">
                  <input
                    type="radio"
                    id={movieOption.title}
                    name="movie"
                    value={movieOption.title}
                    onChange={(e) => setMovie(e.target.value)}
                    checked={movie === movieOption.title}
                    className="mr-3 mt-5"
                  />
                  <label
                    htmlFor={movieOption.title}
                    className="text-gray-700 mt-5"
                  >
                    {movieOption.title} ({movieOption.year}) <br /> - Director:{" "}
                    {movieOption.director}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Input */}
          <div>
            <label
              htmlFor="comment"
              className="block text-gray-700 font-semibold mt-10"
            >
              ความคิดเห็นเพิ่มเติม
            </label>

            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="ใส่ความคิดเห็น..."
            />
          </div>

          {/* Submit and Reset Buttons */}
          <div className="mt-4 flex space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="w-1/2 py-2 border border-solid border-black text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              รีเซ็ต
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              ส่งแบบสอบถาม
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default movieForm;
