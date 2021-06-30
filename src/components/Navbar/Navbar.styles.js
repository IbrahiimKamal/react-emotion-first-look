import { css } from '@emotion/react';

export const navbar = css`
  background-color: black;
  color: #fff;
  padding: 1rem 0;

  ul {
    list-style: none;
    display: flex;
    margin-left: 2rem;
  }

  li {
    /* position: relative; */
  }

  .links {
    color: #fff;
    display: block;
    position: relative;
    padding: 0.3rem 1rem;
    color: white;

    &.active-link {
      color: dodgerblue;
    }
  }
`;
