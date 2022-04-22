import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="fetchdata">Click here to fetch the data</Link>
    </div>
  );
}

export default Home;