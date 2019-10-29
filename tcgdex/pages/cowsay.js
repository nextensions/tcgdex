import { useState } from "react";
import cowsay from "cowsay-browser";

const initState = {
  text: "Moo Moo!"
};

function CowsayHi() {
  const [state, setState] = useState(initState);

  const handleSubmit = e => {
    e.preventDefault();
    const text = document.getElementById("cowsay").value;
    console.log(text);
    const newState = {
      text: text
    };
    setState(newState);
  };

  const a = e => {
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
        onChange={a}
      ></textarea>
    </div>
  );
}

export default CowsayHi;
