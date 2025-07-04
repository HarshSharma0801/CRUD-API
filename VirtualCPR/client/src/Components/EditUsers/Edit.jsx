import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import updateUserApi from "./UpdateApi";
import axios from "axios";

const EditUserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    githubUsername: "",
    YourQuote: "",
  });

  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const { id: userId } = useParams();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/edit/${userId}`);
      if (response.data.success) {
        setUserData(response.data.data);
      } else {
        console.error("Failed to fetch user:", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserApi(userData, userId);
    setUserData({
      name: "",
      githubUsername: "",
      YourQuote: "",
    });
    setTimeout(() => {
      navigate("/Read");
    }, 1000);
  };

  useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="githubUsername"
          >
            GitHub Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="githubUsername"
            type="text"
            placeholder="GitHub Username"
            name="githubUsername"
            value={userData.githubUsername}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="YourQuote"
          >
            Your Quote
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="YourQuote"
            type="text"
            placeholder="Your Quote"
            name="YourQuote"
            value={userData.YourQuote}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Edit User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
