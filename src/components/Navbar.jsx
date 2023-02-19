import { fetchTopics } from "../utils/api.js"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
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
      <Link to="/">🏠 Home</Link>
      {
        topics.map( (topic) => {
          return iconSetter(topic.slug)
        })
      }
    </nav>
  );
}
export default Navbar;
