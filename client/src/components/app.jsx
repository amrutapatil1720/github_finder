import React, { Fragment } from "react";
import "../../dist/style.css";
import Users from "./users.jsx";
import Navbar from "./navbar.jsx";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import Search from "./search.jsx";
import PropTypes from "prop-types";
import Alert from "./alert.jsx";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about.jsx";
import SingleUser from "./singleUserData.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      singleUserData: {},
      repos: [],
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

  // get user data
  getSingleUserData = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({
      singleUserData: res.data,
      isLoading: false
    });
  };

  //get repos of user
  getUserRepos = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({
      repos: res.data,
      isLoading: false
    });
  };
  render() {
    //   var filteredUser= this.state.
    return (
      <Router>
        <div>
          <Navbar />
        </div>
        <Alert alert={this.state.alert} />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <Search
                  searchUser={this.state.searchUser}
                  handleSearchInput={this.handleSearchInput}
                  clickedSearch={this.clickedSearch}
                  clearUser={this.clearUser}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.seAlert}
                />
                <div className="container">
                  <Users
                    isLoading={this.state.isLoading}
                    users={this.state.users}
                  />
                </div>
              </Fragment>
            )}
          />
          {/* <Route path="about">
            <About />
          </Route> */}
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:login"
            render={props => (
              <SingleUser
                {...props}
                getSingleUserData={this.getSingleUserData}
                singleUserData={this.state.singleUserData}
                isLoading={this.state.isLoading}
                getUserRepos={this.getUserRepos}
                repos={this.state.repos}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
