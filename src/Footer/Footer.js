import React from "react";
import "../fonts/fonts.css";
import styled from "styled-components";

export default () => {
  return (
    <footer>
      <select>
        <option>United States</option>
        <option>Russia</option>
      </select>
      <select>
        <option>US dollar</option>
        <option>Russian ruble</option>
      </select>
    </footer>
  );
};
