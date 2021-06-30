import { css } from '@emotion/react';

import mainBgImage from '../../assets/images/banner2.jpg';

export const banner = ({ bgImage, bgHeight }) => css`
  min-height: ${bgHeight || '100vh'};
  background-image: url(${bgImage || mainBgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
