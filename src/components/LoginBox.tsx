import { useNavigate } from "react-router-dom";

export const LoginBox = () => {
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    navigate("/calculator");
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-fuchsia-500 via-red-600 to-violet-700">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 py-6 flex flex-col items-center bg-black"
      >
        <h1 className="pb-2 text-4xl text-white">Login</h1>
        <span className="pb-4 text-base text-gray-500">
          Please enter your login and password!
        </span>
        <input
          type="email"
          required
          placeholder="Email"
          className="w-1/2 p-3 border-2 border-blue-400 rounded-full mb-5 text-white bg-black placeholder:text-center placeholder:text-gray-500 focus-visible:outline-none"
        />

        <input
          type="password"
          required
          placeholder="Password"
          className="w-1/2 p-3 border-2 border-blue-400 rounded-full mb-5 text-white bg-black placeholder:text-center placeholder:text-gray-500 focus-visible:outline-none"
        />

        <input
          type="submit"
          value="Enter"
          className="w-1/4 p-3 border-2 border-green-400 rounded-xl text-white bg-black cursor-pointer hover:bg-green-400"
        />
      </form>
    </main>
  );
};
