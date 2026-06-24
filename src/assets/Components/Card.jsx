import { useState } from "react";
import { loginUser, registerUser } from "../../api/auth";

const Card = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await loginUser({
          email: form.email,
          password: form.password,
        });
        alert(res.data);
      } else {
        const res = await registerUser(form);
        alert("Registered: " + res.data.email);
      }
    } catch (err) {
      alert(err.response?.data || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {!isLogin && (
            <input
              name="name"
              onChange={handleChange}
              placeholder="Name"
              className="w-full border p-2 rounded"
            />
          )}

          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-blue-500 text-white p-2 rounded">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p className="text-center mt-3 text-sm">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-500"
          >
            {isLogin ? "Create account" : "Already have account?"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Card;