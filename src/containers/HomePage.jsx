import React from "react";
import Main from "../components/Main";

import Row from "../components/Row";
import requests from "../Request";

const HomePage = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row
        rowID="3"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default HomePage;
