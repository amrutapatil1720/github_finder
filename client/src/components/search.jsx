import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("search props", this.props);
    return (
      <div>
        <form className="form" onSubmit={this.props.clickedSearch}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Search Users here..."
              className="form-control"
              value={this.props.searchUser}
              onChange={this.props.handleSearchInput}
            ></input>
          </div>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
