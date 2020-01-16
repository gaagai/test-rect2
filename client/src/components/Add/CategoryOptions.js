import React, { Component } from "react";

export default class CategoryOptions extends Component {
  state = {};
  handleOptionsChange = data => {
    const event = {};
    event.target = { name: "category", value: data.target.value };
    this.setState({ value: data.target.value });
    this.props.handleChange(event);
  };

  render() {
    const { value } = this.state;
    const opiLst = this.props.categories;

    const withKey = opiLst.map(op => {
      let key = op.id;
      let text = op.name;
      let newOp = { ...op, key, text };
      return newOp;
    });
    const mapOptions = withKey.map(op => {
      return (
        <option key={op.id} value={op.name}>
          {op.name}
        </option>
      );
    });
    return (
      <>
        Choose a category :
        <select required value={value} onChange={this.handleOptionsChange}>
          <option value=""></option>
          {mapOptions}
        </select>
      </>
    );
  }
}
