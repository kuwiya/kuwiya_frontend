import React from "react";

const AdvancedPlan = ({ width, height }) => {
  return (
    <svg
      width={width || "150"}
      height={height || "150"}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M149.138 6.04835C149.136 6.03836 149.136 6.02819 149.138 6.01821C148.855 4.77708 148.231 3.63976 147.335 2.73458C146.44 1.82941 145.31 1.1924 144.072 0.895417C134.094 -1.53875 118.398 1.05613 101.004 8.02045C83.4725 15.0517 67.0461 25.4313 55.9433 36.5541C52.3847 40.0939 49.0785 43.8788 46.0493 47.8811C38.5727 47.5463 31.9868 48.6111 26.4387 51.0318C7.10604 59.5397 1.58481 81.3132 0.114938 90.253C-0.0977571 91.5232 -0.0144759 92.8254 0.358301 94.0582C0.731078 95.291 1.38329 96.4211 2.26419 97.3606C3.14509 98.3002 4.23091 99.0238 5.43715 99.4751C6.64338 99.9265 7.9375 100.093 9.21878 99.9629H9.26231L30.7981 97.6124C30.8249 97.887 30.855 98.1381 30.8785 98.3691C31.1551 100.993 32.3254 103.443 34.1932 105.307L44.7033 115.823C46.5645 117.694 49.0134 118.866 51.6375 119.142L52.3574 119.219L50.0136 140.728V140.771C49.8938 141.93 50.0171 143.1 50.3755 144.208C50.734 145.316 51.3197 146.337 52.0952 147.206C52.8707 148.075 53.819 148.772 54.8795 149.254C55.9399 149.735 57.0891 149.99 58.2536 150.002C58.7191 150.003 59.1839 149.964 59.6431 149.888C68.6331 148.442 90.3966 142.988 98.8811 123.551C101.282 118.04 102.343 111.481 102.045 104.018C106.065 100.995 109.864 97.6886 113.412 94.1236C124.606 82.9873 135.019 66.6949 141.976 49.418C148.904 32.2215 151.512 16.4078 149.138 6.04835ZM113.292 64.6022C110.541 67.3562 107.035 69.2324 103.217 69.9933C99.3993 70.7542 95.4417 70.3657 91.8449 68.877C88.2481 67.3882 85.1737 64.8661 83.0106 61.6297C80.8475 58.3933 79.6929 54.5881 79.6929 50.6953C79.6929 46.8026 80.8475 42.9973 83.0106 39.7609C85.1737 36.5245 88.2481 34.0024 91.8449 32.5137C95.4417 31.0249 99.3993 30.6365 103.217 31.3974C107.035 32.1583 110.541 34.0344 113.292 36.7885C115.136 38.6047 116.6 40.7696 117.6 43.1571C118.599 45.5446 119.114 48.1071 119.114 50.6953C119.114 53.2836 118.599 55.8461 117.6 58.2335C116.6 60.621 115.136 62.7859 113.292 64.6022Z"
        fill="#F8A434"
      />
    </svg>
  );
};

export default AdvancedPlan;
