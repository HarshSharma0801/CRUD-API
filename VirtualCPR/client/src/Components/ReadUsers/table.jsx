import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import deleteUserApi from "../../DeleteUser/DeleteApi";

const UserTableRow = (props) => {
  const navigate = useNavigate();
  const handleDeleteUser = async () => {
    await deleteUserApi(props.id);
    console.log(props.id);
    setTimeout(() => {
      navigate("/Read");
    }, 1000);
  };

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold text-black">{props.name}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border text-gray-600">
        {props.githubUsername}
      </td>
      <td className="px-4 py-3 text-sm border">{props.yourQuote}</td>
      <td className="px-4 py-3 text-sm border">
        <Link to={`/Edit/${props.id}`}>
          <button className="w-24 bg-blued text-black rounded-md hover:bg-blueded">
            Edit
          </button>
        </Link>
      </td>
      <td className="px-4 py-3 text-sm border">
        <button
          className="w-24 bg-red-500 text-black rounded-md hover:bg-redded"
          onClick={handleDeleteUser}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
