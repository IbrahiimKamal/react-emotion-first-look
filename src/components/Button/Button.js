/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';

import { styles, btn } from './Button.styles';

const Button = ({ bg, fontSize }) => {
  return (
    <Fragment>
      <button css={[styles({ bg, fontSize }), btn]}>click</button>
    </Fragment>
  );
};

export default Button;
