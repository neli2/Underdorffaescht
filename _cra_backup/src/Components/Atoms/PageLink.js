import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const PageLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  padding: 0 20px;
  height: 100%;
  curser: pointer;
  color: white;
  display: ${(props) => props.display || "inherit"};

  &.active {
    color: white;
    font-weight: bold;
  }

  &:hover {
    color: white;
    font-weight: bold;
  }
`;

export default PageLink;
