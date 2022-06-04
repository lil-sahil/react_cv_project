export let createFormElements = (
  currentState,
  changeMethod,
  informationSelection
) => {
  let arr = [];
  // console.log(this.props.currentState);
  for (let info in currentState[informationSelection]) {
    // Input fields
    if (info === "isField") {
      for (let inputField in currentState[informationSelection][info]) {
        let labelName = inputField
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (x) => x.toUpperCase());

        let element = (
          <div>
            <label>{`${labelName}`}</label>
            <input
              type="input"
              id={`${inputField}`}
              onChange={changeMethod}
            ></input>
          </div>
        );
        arr.push(element);
      }
    }
  }
  return arr;
};
