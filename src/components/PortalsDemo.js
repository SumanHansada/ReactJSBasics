import React from "react";
import reactDom from "react-dom";

/**
 * Reason to use Portals -
 * When child component is Modal, Popup or Tooltip
 * Portal Demo - https://codesandbox.io/s/00254q4n6p
 * Portal Event Bubbling - https://codepen.io/gaearon/pen/jGBWpE
 * Even though Portals are rendered outside main DOM,
 * Events are bubbled up as normal React tree. So events fired inside portal will propagate to
 * the corresponding react tree even though the elements are not the ancestors in the DOM tree.
 */

function PortalsDemo() {
  return reactDom.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalsDemo;
