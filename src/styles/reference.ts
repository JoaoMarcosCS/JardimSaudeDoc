import styled from "styled-components";
import { Topics } from "../types/Topics";

interface ReferenceProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: Topics;
  }

export const Reference = styled.a<ReferenceProps>`
    font-style: italic;
    font-weight: 700;
    font-size:1.1rem;
    text-decoration: underline var(--primary-green) 2px;
    color:var(--primary-green);
    letter-spacing: 1.5px;
`