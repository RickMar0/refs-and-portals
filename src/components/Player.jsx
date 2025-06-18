import { useState, useRef} from "react";

export default function Player() {

  const inputRef = useRef();

  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "my friend!"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
