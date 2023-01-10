import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api.js"
function Navbar() {
  const [topics, setTopics] = useState([])
  useEffect( () => {
    fetchTopics()
    .then( ({ topics }) => {
      setTopics(topics);
}
    )})
  return (
    <nav>
      {
        topics.map( (topic) => {
          return <p>{ topic.slug }</p>
        })
      }
    </nav>
  );
}
export default Navbar;
