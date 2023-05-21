import * as React from "react";
const AlarmIcon = (props) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 7.875V14H20.125"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 23.625C19.3157 23.625 23.625 19.3157 23.625 14C23.625 8.68426 19.3157 4.375 14 4.375C8.68426 4.375 4.375 8.68426 4.375 14C4.375 19.3157 8.68426 23.625 14 23.625Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="M21.4277 2.86328L25.1355 6.57109"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.86523 6.57109L6.57305 2.86328"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AlarmIcon;
