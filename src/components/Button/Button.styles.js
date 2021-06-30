import { css } from '@emotion/react';

export const styles = ({ bg, fontSize }) => css`
  background: ${(bg === 'primary' && 'dodgerblue') ||
  (bg === 'danger' && 'red') ||
  'green'};
  border: 0;
  padding: 0.3rem 1rem;
  font-size: ${fontSize};
  cursor: pointer;
`;

export const btn = css`
  border-radius: 0.4rem;
`;
