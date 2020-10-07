import React from "react";
import {Helmet} from "react-helmet";

export default function Magic() {
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