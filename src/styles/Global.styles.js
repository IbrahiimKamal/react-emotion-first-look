import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          --primary-color: brown;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
