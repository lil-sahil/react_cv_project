import { convertCamelToRegular } from "./camelCasetoRegular";

export let createFormElements = (
  currentState,
  changeMethod,
  informationBucket
) => {
  let finalArr = [];
  console.log(informationBucket);

  for (let bucket in currentState) {
    if (bucket === informationBucket) {
      for (let enteries in currentState[bucket]) {
        if (!enteries.includes("numberOfEnteries")) {
          let bucketArray = [];
          for (let individualEnteries in currentState[bucket][enteries]) {
            let convertedName = convertCamelToRegular(individualEnteries);
            let element = (
              <div>
                <label>{convertedName}</label>
                <input
                  type="input"
                  id={individualEnteries}
                  onChange={changeMethod}
                ></input>
              </div>
            );

            bucketArray.push(element);
          }
          finalArr.push(bucketArray);
        }
      }
    }
  }

  return finalArr;
};
