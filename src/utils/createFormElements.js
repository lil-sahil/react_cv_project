import { convertCamelToRegular } from "./camelCasetoRegular";
import { RiDeleteBinFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { IoMdAddCircle } from "react-icons/io";

export let createFormElements = (
  currentState,
  changeMethod,
  informationType,
  deleteEvent,
  addDescription,
  deleteDescription
) => {
  let addDeleteButton = [
    "educationInformation",
    "workInformation",
    "projectInformation",
  ];
  let descriptionAddButton = ["workInformation", "projectInformation"];
  return currentState[informationType].map((x, ind) => {
    let arr = [];
    let element;
    for (let y in x) {
      if (y !== "id") {
        element = (
          <div className={`${informationType} description-style`}>
            {y.includes("description") ? (
              <>
                <textarea
                  className={y}
                  onChange={changeMethod}
                  placeholder="Enter a description"
                  value={currentState[informationType][ind][y]}
                ></textarea>

                <button onClick={deleteDescription} className={y}>
                  <ImCross />
                </button>
              </>
            ) : (
              <input
                type="input"
                className={y}
                onChange={changeMethod}
                placeholder={convertCamelToRegular(y)}
                value={currentState[informationType][ind][y]}
              ></input>
            )}
          </div>
        );
        arr.push(element);
      }
    }

    return (
      <div className={x.id}>
        {arr}
        {descriptionAddButton.includes(informationType) ? (
          <button
            onClick={addDescription}
            className={`${informationType} add-btn-small`}
          >
            <IoMdAddCircle />
          </button>
        ) : (
          false
        )}

        {/* Make sure the delete button is added on top of the divs to prevent nextsibling from breaking */}
        {addDeleteButton.includes(informationType) ? (
          <button onClick={deleteEvent} className="delete-btn-large">
            <RiDeleteBinFill />
          </button>
        ) : (
          false
        )}
      </div>
    );
  });
};
