import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ul>
          <Link to="/">Home </Link>
          <Link to="section1"> Section 1</Link>
        </ul>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
