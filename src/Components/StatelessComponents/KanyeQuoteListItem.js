import React from "react";

let KanyeQuoteListItem = ({quote, key}) => (
  <li className={"kanye-quote main-item"} key={key}>{quote}</li>
);

export default KanyeQuoteListItem;