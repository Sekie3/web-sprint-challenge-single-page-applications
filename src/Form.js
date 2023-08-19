import React from "react";

const Form = (props) => {
  const { change, errors, values, handleSubmit } = props;

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newVal = type === 'checkbox' ? (checked ? [...values[name], value] : values[name].filter(item => item !== value)) : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <div>
      {errors.name && <p>{errors.name}</p>}
      <h1>Pizza Form</h1>
      <form id='pizza-form' onSubmit={onSubmit}>
        <div>
            <label >
            Name:
            <input  
                id='name-input'
                type="text"
                name="name"
                onChange={onChange}
            />
            </label>
        </div>

        <div>
            <label>
            Select a Size:
            <select name="size" onChange={onChange} value={values.size} id="size-dropdown">
                <option value="" disabled>Select an option</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </label>
        </div>

        <label>
          Toppings:
          <div>
            <label>
              <input
                type="checkbox"
                name="toppings"
                value="pepperoni"
                onChange={onChange}
                checked={Array.isArray(values.toppings) && values.toppings.includes("pepperoni")}
              />
              Pepperoni
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="toppings"
                value="mushrooms"
                onChange={onChange}
                checked={Array.isArray(values.toppings) && values.toppings.includes("mushrooms")}
              />
              Mushrooms
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="toppings"
                value="olives"
                onChange={onChange}
                checked={Array.isArray(values.toppings) && values.toppings.includes("olives")}
              />
              Olives
            </label>
          </div>
        </label>
        <div>
            <label>
              <input
                type="checkbox"
                name="toppings"
                value="Bell Peppers"
                onChange={onChange}
                checked={Array.isArray(values.toppings) && values.toppings.includes("Bell Peppers")}
              />
              Bell Peppers
            </label>
          </div>

          <label>
            Additional Notes:
            <textarea
                id='special-text'
                name="notes"
                onChange={onChange}
                value={values.notes}
            />
          </label>
        <div>
            <input type="submit" value="Submit" id='order-button' />
        </div>
      </form>
    </div>
  );
};

export default Form;
