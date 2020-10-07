import React from "react";
import {Helmet} from "react-helmet";
import "./style.css";

export default function App() {
  return (
    <div>
      <Helmet>
        <script>
          window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        </script>
      </Helmet>
    </div>
  );
}