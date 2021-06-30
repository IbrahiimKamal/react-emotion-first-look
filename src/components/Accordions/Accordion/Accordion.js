/** @jsxImportSource @emotion/react */
import { useLayoutEffect, useRef, useState } from 'react';

import { accordion } from './Accordion.styles';

const Accordion = ({ title, desc }) => {
  const [height, setHeight] = useState(false);

  const parentRef = useRef(null);
  const childRef = useRef(null);

  useLayoutEffect(() => {
    if (!height) {
      parentRef.current.style.height = 0;
    } else {
      parentRef.current.style.height = `${
        childRef.current.getBoundingClientRect().height
      }px`;
    }
  }, [height]);

  return (
    <div css={accordion}>
      <h3 className="title" onClick={() => setHeight(!height)}>
        {title}
      </h3>
      <div className="desc-container" ref={parentRef}>
        <p ref={childRef}>{desc}</p>
      </div>
    </div>
  );
};

export default Accordion;
