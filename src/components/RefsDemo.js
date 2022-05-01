import React, { Component } from "react";

/**
 * There are two approaches fro Refs
 * 1. createRef() approach
 *  - With createRef() approach, you create a reference using React.createRef() method
 *  - In createRef() approach, we assign reference to an element using the ref prop and
 *      assigning the property
 *  - In createRef() approach, the element can be accessed using this.referenceVariable.current
 *
 *
 * 2. callback Ref approach
 *  - You first create a property, and then create a method that assigns the property with
 *      with a DOM element passed as a parameter
 *  - In callback ref approach, we attach the ref to an element using the method that in
 *      in turns assigns element to the property
 *  - In callback ref approach, it is accessed directly using this.referenceVariable
 */

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    console.log(this.cbRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // console.log(this.inputRef);
    // this.inputRef.current.focus();
  }

  clickHandler() {
    alert(this.cbRef.value);
    // alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <div>RefsDemo</div>
        <label htmlFor="inputRef">InputRef</label>
        <input id="inputRef" type="text" ref={this.inputRef} />
        <label htmlFor="cbRef">CbRef</label>
        <input id="cbRef" type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
