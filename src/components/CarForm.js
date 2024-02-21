import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const {name, cost} = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    };
  });

  const handleNameChange = (event) => {
    const name = event.target.value;
    dispatch(changeName(name));
  };
  const handleCostCange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({name, cost}));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ''}
              onChange={handleCostCange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
