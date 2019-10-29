import { useState } from "react";
import cowsay from "cowsay-browser";

const initState = {
  text: "Moo Moo!"
};

function CowsayHi() {
  const [state, setState] = useState(initState);

  const handleTextChange = e => {
    setState({
      text: e.target.value
    });
  };

  const { text } = state;
  return (
    <div>
      <pre>{cowsay.say({ text })}</pre>
      <label htmlFor="cowsay">Cow say Here!</label>
      <br />
      <textarea
        name="cowsay"
        id="cowsay"
        cols="20"
        rows="5"
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default CowsayHi;
