import React, { useState } from "react";
import movies from "../assets/dataforForm/movies";



function movieForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});         /// อัพเดทค่า errors ให้ข้างในเป็น object



  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function validateForm() {                        /// function นี้ ทำงานร่วมกับ errors state และ errors eventhandler(setErrors)
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
  
    setErrors(newErrors);                          /// อัพเดทค่าให้ errors ผ่าน eventhandler
    return Object.keys(newErrors).length
  }


//// Submission part 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm() != 0) 
    console.log({ name, email, movie, comment });

  };


  const handleReset = () => {
    setName("");
    setEmail("");
    setMovie("");
    setComment("");
  };


  return (
  <>
  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-6 text-xl font-semibold  max-w-md mx-auto">
        Movie Survey
      </div>
    <div className="max-w-md mx-auto p-6 bg-white  shadow-md">
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4   text-xl font-semibold">
        Movie Survey
      </div> */}
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
            // required
          />
          {errors.name && <p className="error-message text-red-600">{errors.name}</p>}
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
            // required
          />
          {errors.email && <p className="error-message text-red-600">{errors.email}</p>}
        </div>

        {/* Movie Selection */}
        <div className="">
          <label className="block text-gray-700 font-semibold mb-5">
            เลือกภาพยนตร์ที่คุณชอบ <span className="text-red-500">*</span>
          </label>
          {errors.movie && <p className="error-message text-red-600">{errors.movie}</p>}
          <div className="space-y-2 mt-2 ">
            {movies.map((movieOption) => (
              <div key={movieOption.title} className="flex items-center mt-4 ">
                <input
                  type="radio"
                  id={movieOption.title}
                  name="movie"
                  value={movieOption.title}
                  onChange={(e) => setMovie(e.target.value)}
                  checked={movie === movieOption.title}
                  className="mr-3 mt-5 "
                  // required
                />
                <label htmlFor={movieOption.title} className="text-gray-700 mt-5">
                  {movieOption.title} ({movieOption.year}) <br /> - Director:{" "}
                  {movieOption.director}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Input */}
        <div>
          <label htmlFor="comment" className="block text-gray-700 font-semibold mt-10 ">
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

        {/* Submit Button */}
        <div className="mt-4 flex space-x-48   ">
        <button
              type="button"
              onClick={handleReset}
              className="w-1/2 py-2 border border-solid border-black text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              รีเซ็ต
            </button>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
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
