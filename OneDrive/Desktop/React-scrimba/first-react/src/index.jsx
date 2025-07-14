import padsData from "./pads";
import React from "react";
import Pad from "./componets/Pad";
export function Pads() {
  function toggle() {
    console.log("clicked");
  }
  /**
   * Challenge:
   * Call setPads to update the state of the one pad that was
   * clicked. Map over the previous pads array, and if the current
   * item you're iterating over has the same id as the `id` passed
   * to this function, then return a new object with the `on` value
   * set to the opposite of what it was before.
   * Otherwise (if the ids don't match), just return the previous
   * item as it was, unchanged.
   */
  const [pads, setPads] = React.useState(padsData);
  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} isOn={pad.on} handleClick={toggle} />
  ));

  return (
    <>
      <main>
        <div className="pad-container">{buttonElements}</div>
      </main>
    </>
  );
}
