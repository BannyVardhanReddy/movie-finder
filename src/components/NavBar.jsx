import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ handleSearch }) {
  const [inputText, setInputText] = useState("");

  function handleOnChange(e) {
    setInputText(e.target.value);
  }

  function handleOnClick(){
    handleSearch(inputText);
    // console.log(res);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(inputText);
  }

  return (
    <nav>
      <Link to = "/" className="nav-link-home">
        <button type="button">Back Home</button>
      </Link>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          placeholder="Search for a movie"
          value={inputText}
          onChange={handleOnChange}
          aria-label="Search for a movie"
        ></input>
        <Link to = "/">
          <button type="button" onClick={handleOnClick}>Search</button>
        </Link>
      </form>
    </nav>
  );
}

export default NavBar;
