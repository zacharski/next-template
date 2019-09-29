import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: "auto auto", width: "600px", textAlign: "center" }}>
        <img src="/static/github1.png" className="App-logo" />
        <h2>Github User Search</h2>

        <style jsx>{`
          h1,
          h2,
          a,
          p {
            font-family: "Arial";
          }

          .description {
            font-family: "Arial";
            font-size: "10px";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }
          .App-logo {
            height: 80px;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
