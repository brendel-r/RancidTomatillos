import React from "react";
import Select from "react-select";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {},
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

  handleChange = (value) => {
    this.setState({ selection: value });
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state.selection.value)
    this.props.updateFilteredList(this.state.selection.value)
  };

  render() {
    return (
      <form onSubmit={(event) => this.submitForm(event)}>
        <label htmlFor="selection">Filter by rating!</label>
        <Select
          id="selection"
          options={this.options}
          onChange={(value) => {
            this.handleChange(value);
          }}
        />
      </form>
    );
  }
}

export default FilterForm;
