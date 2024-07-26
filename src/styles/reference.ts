import styled from "styled-components";
import { Topics } from "../types/Topics";

interface ReferenceProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: Topics;
  }

export const Reference = styled.a<ReferenceProps>`
    font-style: italic;
    font-weight: 700;
    font-size:1.1rem;
    text-decoration: underline var(--secondary-color) 2px;
    color:var(--secondary-color);
    letter-spacing: 1.5px;
`