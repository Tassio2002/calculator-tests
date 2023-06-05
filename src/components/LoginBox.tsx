export const LoginBox = () => {
  return (
    <div className="w-1/3 py-6 flex flex-col items-center bg-black">
      <h1 className="pb-2 text-4xl text-white">Login</h1>
      <span className="pb-4 text-base text-gray-500">
        Please enter your login and password!
      </span>
      <input
        type="email"
        className="w-1/2 p-3 border-2 border-blue-400 rounded-full mb-5 text-white bg-black placeholder:text-center placeholder:text-gray-500 focus-visible:outline-none"
        placeholder="Username"
      />

      <input
        type="password"
        className="w-1/2 p-3 border-2 border-blue-400 rounded-full mb-5 text-white bg-black placeholder:text-center placeholder:text-gray-500 focus-visible:outline-none"
        placeholder="Password"
      />

      <input
        type="button"
        value="Enter"
        className="w-1/4 p-3 border-2 border-green-400 rounded-xl text-white bg-black cursor-pointer hover:bg-green-400"
      />
    </div>
  );
};
