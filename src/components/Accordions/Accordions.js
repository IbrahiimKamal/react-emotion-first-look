/** @jsxImportSource @emotion/react */

import items from '../../data/data.json';
import Accordion from './Accordion/Accordion';

import { accordion } from './Accordions.styles';

const Accordions = () => {
  return (
    <div css={accordion}>
      {items.map((item) => (
        <Accordion key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Accordions;
