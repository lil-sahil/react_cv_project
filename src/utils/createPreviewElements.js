import { convertCamelToRegular } from "./camelCasetoRegular";

export let createPreviewElements = (currentState, informationType) => {
  return currentState[informationType].map((x) => {
    let arr = [];
    let element;
    for (let y in x) {
      if (y !== "id") {
        console.log(y);
        let value = x[y];
        element = <div>{`${convertCamelToRegular(y)}: ${value}`}</div>;
        arr.push(element);
      }
    }

    return <div>{arr}</div>;
  });
};
