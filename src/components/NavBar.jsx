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
  return (
    <div>
        <Link to = "/">
            <button>Back</button>
        </Link>
      <div>
        <input
          placeholder="Search for a movie"
          value={inputText}
          onChange={handleOnChange}
        ></input>
        <Link to = "/">
            <button onClick={handleOnClick}>Search</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
