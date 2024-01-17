// import React from 'react';

export const SvgSelector = ({ id }) => {
  switch (id) {
    case 'xClose':
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#111"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </g>
        </svg>
      );
    case 'plusBtnWhite':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.99996 4.16669V15.8334M4.16663 10H15.8333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'editBtn':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M2.375 16.125L6.53695 14.5242C6.80316 14.4218 6.93626 14.3707 7.06079 14.3038C7.1714 14.2444 7.27685 14.1759 7.37603 14.0989C7.48769 14.0123 7.58853 13.9115 7.79021 13.7098L16.25 5.24998C17.0784 4.42156 17.0784 3.07841 16.25 2.24998C15.4216 1.42156 14.0784 1.42156 13.25 2.24998L4.79021 10.7098C4.58853 10.9115 4.48769 11.0123 4.40104 11.124C4.32408 11.2231 4.25555 11.3286 4.19618 11.4392C4.12933 11.5637 4.07814 11.6968 3.97575 11.963L2.375 16.125ZM2.375 16.125L3.91859 12.1117C4.02905 11.8245 4.08428 11.6809 4.17901 11.6151C4.26179 11.5577 4.36423 11.5359 4.46322 11.5548C4.5765 11.5765 4.68529 11.6853 4.90286 11.9028L6.59718 13.5971C6.81475 13.8147 6.92354 13.9235 6.94517 14.0368C6.96408 14.1358 6.94234 14.2382 6.88486 14.321C6.81909 14.4157 6.67549 14.471 6.3883 14.5814L2.375 16.125Z"
            stroke="white"
            // stroke-width="1.3"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
        </svg>
      );
    default:
      break;
  }
};
