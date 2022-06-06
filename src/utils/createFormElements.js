import { convertCamelToRegular } from "./camelCasetoRegular";

export let createFormElements = (
  currentState,
  changeMethod,
  informationType
) => {
  return currentState[informationType].map(x => {
    let arr = []
    let element
    for (let y in x){
      if (y !== 'id'){
        element = (
          <div className={informationType}>
            <label>{y}</label>
            <input
              type="input"
              className = {y}
              onChange={changeMethod}
            ></input>
          </div>
        )
        arr.push(element)
      }

    }

    return (
      <div className = {x.id}>
        {arr}
      </div>    
    )
  })

};