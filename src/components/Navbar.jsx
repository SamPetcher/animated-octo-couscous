import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api.js"
function Navbar() {
  const [topics, setTopics] = useState([])
  function iconSetter(topic) {
    switch (topic) {
      case "cooking":
        return "🍳 Cooking";
      case "coding":
        return "💻 Coding"
      case "football":
        return "⚽ Football"
      default:
        return "O"
  }
}
  useEffect( () => {
    fetchTopics()
    .then( ({ topics }) => {
      setTopics(topics);
}
    )},[])
  return (
    <nav>
      <a>🏠 Home</a>
      {
        topics.map( (topic) => {
          return <a>{iconSetter(topic.slug)}</a>
        })
      }
    </nav>
  );
}
export default Navbar;
