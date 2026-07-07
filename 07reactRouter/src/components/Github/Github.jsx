import { useState, useEffect } from "react";

const Github = () => {
  const [data, setData] = useState({});



  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/adityagaur7078"
        );

        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error("Error fetching Github data:", error);
      }
    };

    fetchGithubData();
  }, []);



  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      <h2>Github Public Repositories: {data.public_repos}</h2>

      <img
        src={data.avatar_url}
        alt="Github Picture"
        className="mx-auto mt-4 rounded-full w-40"
      />
    </div>
  );
};

export default Github;