import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Section */}
      <div className="relative w-1/2">
        {/* LOG IN Section */}
        <div className="relative flex flex-col justify-center items-center bg-white h-1/2">
          <div className="flex items-center">
            <div className="h-16 w-2 bg-orange-600 mr-6"></div> {/* Small rectangular bar */}
            <div className="flex flex-col justify-center">
              <h1 className="text-orange-600 text-4xl font-bold tracking-wider leading-none">LOG</h1>
              <h1 className="text-orange-600 text-4xl font-bold tracking-wider leading-none text-left">IN</h1>
            </div>
          </div>
          {/* "<" Shape Cut-Out */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-[60px] overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-full bg-stone-200" style={{ clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}></div>
          </div>
        </div>

        {/* SIGN UP Section */}
        <div className="flex flex-col justify-center items-center bg-orange-600 h-1/2">
          <div className="flex items-center">
            <div className="h-16 w-2 bg-white mr-6"></div> {/* Small rectangular bar */}
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-4xl font-bold tracking-wider leading-none">SIGN</h1>
              <h1 className="text-white text-4xl font-bold tracking-wider leading-none text-left">UP</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-stone-200 flex flex-col justify-center p-12">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-center mb-3">
            <img src="https://cdn-icons-png.freepik.com/512/10542/10542498.png" alt="User Icon" className="w-20 h-20" />
          </div>
          <h1 className="text-2xl mb-6 font-sans text-gray-700">Login</h1>
          <form className="space-y-4">
            <div className="relative mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1 text-left">Email</label>
              <input
                type="email"
                placeholder=" "
                className="w-full px-4 py-1 border-b border-orange-600 bg-transparent focus:outline-none focus:border-orange-500 pr-12"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7ba1XOuyY45MmrAnDLYLxv0QA16N4cGBtQ&s"
                alt="user icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
            <div className="relative mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1 text-left">Password</label>
              <input
                type="password"
                placeholder=" "
                className="w-full px-4 py-1 border-b border-orange-600 bg-transparent focus:outline-none focus:border-orange-500 pr-12"
              />
              <img
                src="https://cdn-icons-png.freepik.com/512/2893/2893425.png"
                alt="Lock Icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="/" className="text-gray-700 hover:underline">Forgot Password?</a>
            </div>
            <div className="flex justify-center">
              <button
                className="w-32 bg-orange-600 text-white font-bold py-2 px-4 hover:bg-orange-600 rounded-full"
                style={{ marginTop: '2rem' }}
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <span className="text-gray-700">New user?</span> <a href="/" className="text-orange-600 hover:underline">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
