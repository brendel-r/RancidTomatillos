import React from "react";
import Select from "react-select";
import "./FilterForm.css";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
    };
    this.options = [
      { value: 2, label: "2 ⭐️ & Up" },
      { value: 3, label: "3 ⭐️ & Up" },
      { value: 4, label: "4 ⭐️ & Up" },
      { value: 5, label: "5 ⭐️ & Up" },
      { value: 6, label: "6 ⭐️ & Up" },
      { value: 7, label: "7 ⭐️ & Up" },
      { value: 8, label: "8 ⭐️ & Up" },
      { value: 9, label: "9 ⭐️ & Up" },
      { value: 10, label: "10 ⭐️" },
    ];
  };

  handleChange = (choice) => {
    this.setState({ selection: choice });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.updateFilteredList(this.state.selection.value)
  };

  clearForm = (event) => {
    event.preventDefault();
    this.setState({ selection:{} })
    this.props.updateFilteredList(1)
  };

  render() {
    return (
      
      <form className="form-container" onSubmit={(event) => this.submitForm(event)}>
        <label className="submit-label" htmlFor="selection">Filter by rating</label>
        <Select 
          id="selection"
          options={this.options}
          value={this.state.selection}
          onChange={(value) => {
            this.handleChange(value);
          }}
        />
        <div className="buttons">
        <button className="submit-button" type="submit">Show movies</button>
        <button className="clear-button" onClick={(event) => this.clearForm(event)}>Clear filter</button>
        </div>
      </form>
      
    );
  }
}

export default FilterForm;
