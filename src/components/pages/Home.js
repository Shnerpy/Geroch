import React from "react";
import "../style.css";
import Header from "../sections/header"
import Footer from "../sections/footer"

export default function Home() {
  return (<>
    <Header />
    <section>
      <div className="container">
        <h2>Heading Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante metus, bibendum sed euismod efficitur,
          laoreet at massa. Mauris sit amet iaculis diam, eu accumsan eros. Vivamus commodo ac est a eleifend. Nunc
          consequat tincidunt orci, at tincidunt tellus bibendum eu. Sed ac eros enim. Praesent efficitur ipsum
          tortor, sit amet elementum lacus sollicitudin et. Sed ornare euismod ligula et venenatis.
        </p>
      </div>
    </section>
    <Footer />
  </>);
}

{/*
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
*/}