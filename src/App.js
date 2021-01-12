import React, { Component } from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Navbar>Employee Directory</Navbar>

        <div className="container">
          <Table></Table>

        </div>
       

      </Wrapper>
    );
  }
}

export default App;
