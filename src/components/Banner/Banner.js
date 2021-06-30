/** @jsxImportSource @emotion/react */

import { banner } from './Banner.styles';

const Banner = (props) => {
  const { bgImage, bgHeight } = props;

  return <div css={banner({ bgImage, bgHeight })}>{props.children}</div>;
};

export default Banner;
