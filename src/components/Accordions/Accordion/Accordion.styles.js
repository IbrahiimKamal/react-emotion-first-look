import { css } from '@emotion/react';

export const accordion = css`
  background-color: teal;
  max-width: 400px;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;

  .title {
    color: #fff;
    cursor: pointer;
  }

  .desc-container {
    overflow: hidden;
    transition: height 0.3s;
  }

  p {
    padding: 1rem 0 0 0;
  }
`;
