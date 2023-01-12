import { fetchTopics } from "../utils/api.js"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
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
          return <a key={uuidv4()}>{iconSetter(topic.slug)}</a>
        })
      }
    </nav>
  );
}
export default Navbar;
