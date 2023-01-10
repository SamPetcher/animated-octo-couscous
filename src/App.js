import './App.css';
import ArticleList from './components/ArticleList';
import Navbar from "./components/Navbar.jsx"
import UserSection from './components/UserSection';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <ArticleList />
      <UserSection />
      <footer>FOOTER</footer>
    </div>
    
  );
}

export default App;
