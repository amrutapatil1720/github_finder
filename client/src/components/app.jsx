import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../dist/style.css";
import Users from "./users.jsx";
import Navbar from "./navbar.jsx";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import Search from "./search.jsx";
import PropTypes from "prop-types";
import Alert from "./alert.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      alert: null
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.clickedSearch = this.clickedSearch.bind(this);
  }

  static PropTypes = {
    searchUserProfile: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired
  };

  //   async componentDidMount() {
  //     // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //     this.setState({
  //       isLoading: true
  //     });

  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );

  //     // console.log(res.data);
  //     this.setState({
  //       users: res.data,
  //       isLoading: false,
  //       searchUser: ""
  //     });
  //   }

  handleSearchInput(e) {
    // console.log(e.target.value);
    this.setState({
      searchUser: e.target.value
    });
  }

  clickedSearch(e) {
    e.preventDefault();
    if (this.state.searchUser === "") {
      this.setAlert("Please serach something...", "light");
    } else {
      this.searchUserProfile(this.state.searchUser);
      this.setState({
        searchUser: ""
      });
    }
  }

  searchUserProfile = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({
      users: res.data.items,
      isLoading: false,
      searchUser: ""
    });
  };

  clearUser = () => {
    // console.log("hiiiiiii");
    this.setState({
      users: [],
      isLoading: false
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    //   var filteredUser= this.state.
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <Alert alert={this.state.alert} />
        <Search
          searchUser={this.state.searchUser}
          handleSearchInput={this.handleSearchInput}
          clickedSearch={this.clickedSearch}
          clearUser={this.clearUser}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.seAlert}
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
