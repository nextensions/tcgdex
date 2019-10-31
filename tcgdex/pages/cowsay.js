import { useState, useEffect } from "react";
import { say } from "cowsay-browser";
import { produce } from "immer";

const initState = {
  text: " "
};

const a = `Prepare for trouble!
And make it double!
To protect the world from devastation!
To unite all peoples within our nation!
To denounce the evils of truth and love!
To extend our reach to the stars above!
Jessie!
James!
Team Rocket blasts off at the speed of light!
Surrender now, or prepare to fight!`;

function CowsayHi() {
  const [state, setState] = useState(initState);

  useEffect(() => {
    const words = a.split(" ");
    let { text: newText } = state;
    let currentWord = words[0];
    setInterval(() => {
      if (words.length === 0) return;
      let print = currentWord[0];
      currentWord = currentWord.substr(1, currentWord.length - 1);

      const newState = produce(state, draftState => {
        draftState["text"] = (newText += print).trimStart();
      });
      setState(newState);
      if (currentWord.length === 0) {
        const newState = produce(state, draftState => {
          draftState["text"] = (newText += " ").trimStart();
        });
        setState(newState);
        words.shift();
        currentWord = words[0];
      }
    }, 75);
  }, []);

  const { text } = state;
  return (
    <div>
      <pre>
        {say({
          text,
          f: "elephant"
        })}
      </pre>
    </div>
  );
}

export default CowsayHi;
