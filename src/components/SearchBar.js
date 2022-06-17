import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // // 1st way to solve the 'this' issues. making a constructor object.
  // constructor(props) {
  //   super(props);

  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // // 2nd way to solve the 'this' issues. using arrow function.
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
