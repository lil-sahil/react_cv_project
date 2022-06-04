export let createFormElements = (currentState, changeMethod, itemNames) => {
  let arr = [];

  for (let stateName in currentState) {
    for (let itemName of itemNames) {
      if (stateName.includes(itemName)) {
        let labelName = itemName
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (x) => x.toUpperCase());

        let element = (
          <div>
            <label>{`${labelName}`}</label>
            <input
              type="input"
              id={`${itemName}`}
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
