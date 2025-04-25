import React from "react";

export default function button({ href = "/", variant, text }) {
  return <a href={href}>{text}</a>;
}
