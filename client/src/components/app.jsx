import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../dist/style.css";
import UserItem from "./userItem.jsx";
import Users from "./users.jsx";
import Navbar from "./navbar.jsx";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import Search from "./search.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.clickedSearch = this.clickedSearch.bind(this);
  }

  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({
      isLoading: true
    });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({
      users: res.data,
      isLoading: false,
      searchUser: ""
    });
  }

  handleSearchInput(e) {
    console.log(e.target.value);
    this.setState({
      searchUser: e.target.value
    });
  }

  clickedSearch(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <Search
          searchUser={this.state.searchUser}
          handleSearchInput={this.handleSearchInput}
          clickedSearch={this.clickedSearch}
        />
        <div className="container">
          <Users isLoading={this.state.isLoading} users={this.state.users} />
        </div>

        {/* <UserItem /> */}
      </div>
    );
  }
}

export default App;
