import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/DivyanshiNarang")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="flex flex-col gap-3 items-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github Username: {data.name}</p>
      <p>Github followers: {data.followers}</p>
      <img
        src={data.avatar_url}
        alt="github profile"
        width="120"
        height="120"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/DivyanshiNarang");
  return response.json();
};
