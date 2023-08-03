import { Icon, IconProps } from "@chakra-ui/react";

export const EthIcon = (props: IconProps) => (
  <Icon viewBox="0 0 21 22" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 11C21 16.799 16.299 21.5 10.5 21.5C4.70101 21.5 0 16.799 0 11C0 5.20101 4.70101 0.5 10.5 0.5C16.299 0.5 21 5.20101 21 11ZM10.4582 19.2343C10.4663 19.2426 10.4734 19.25 10.4905 19.25L10.4906 19.25H10.5102C10.5199 19.25 10.5363 19.2403 10.5363 19.2241L15.6774 12.1326C15.697 12.1132 15.697 12.097 15.6774 12.0776C15.6676 12.0582 15.6415 12.0582 15.6219 12.0679L10.4915 15.0464L5.36901 12.0776C5.34942 12.0679 5.3331 12.0679 5.31352 12.0873C5.30372 12.097 5.30372 12.1229 5.31352 12.1423L10.4546 19.2306L10.4582 19.2343ZM10.471 14.0996L10.4906 14.1093L10.4976 14.1046L10.5102 14.1093L10.5265 14.0996L15.7231 11.1653C15.7287 11.1619 15.7336 11.1574 15.7375 11.1523C15.7394 11.1512 15.7411 11.1501 15.7427 11.1491C15.7524 11.1297 15.7524 11.1135 15.7427 11.0941L10.5559 2.77322C10.5372 2.75475 10.5215 2.74507 10.5032 2.75253C10.4781 2.74853 10.4636 2.75544 10.4546 2.77327L5.27079 11.0757C5.26008 11.0791 5.25331 11.0905 5.25185 11.1045C5.2468 11.1174 5.25295 11.1295 5.25983 11.143L5.26131 11.1459C5.27024 11.1548 5.28461 11.1636 5.2945 11.1651L10.471 14.0996Z"
      fill={typeof props.fill === "string" ? props.fill : "#182129"}
    />
  </Icon>
);

export const BlueEthIcon = (props: IconProps) => (
  <Icon width="50" height="50" viewBox="0 0 50 50" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM24.9005 44.6054C24.9197 44.6252 24.9367 44.6429 24.9774 44.6429L24.9775 44.6428H25.0242C25.0475 44.6428 25.0863 44.6197 25.0863 44.5812L37.3271 27.6967C37.3737 27.6504 37.3737 27.6119 37.3271 27.5657C37.3038 27.5195 37.2416 27.5195 37.195 27.5426L24.9797 34.6343L12.7834 27.5657C12.7367 27.5426 12.6979 27.5426 12.6512 27.5888C12.6279 27.6119 12.6279 27.6736 12.6512 27.7198L24.892 44.5966L24.9005 44.6054ZM24.9309 32.38L24.9776 32.4031L24.9943 32.392L25.0242 32.4031L25.063 32.38L37.4359 25.3935C37.4493 25.3855 37.4609 25.3748 37.4703 25.3626C37.4748 25.3599 37.4789 25.3574 37.4825 25.355C37.5058 25.3088 37.5058 25.2703 37.4825 25.2241L25.133 5.41243C25.0886 5.36845 25.0513 5.34539 25.0076 5.36317C24.9479 5.35364 24.9134 5.3701 24.892 5.41255L12.5495 25.1803C12.524 25.1884 12.5079 25.2156 12.5044 25.2488C12.4924 25.2795 12.507 25.3083 12.5234 25.3405L12.5269 25.3474C12.5482 25.3685 12.5824 25.3896 12.6059 25.3931L24.9309 32.38Z"
      fill="#1D8AED"
    />
  </Icon>
);

export const SwitchIcon = (props: IconProps) => (
  <Icon viewBox="0 0 21 22" {...props}>
    <path
      d="M22 9L17 6.11325V11.8868L22 9ZM6 9.5H17.5V8.5H6V9.5Z M6 19L11 21.8868V16.1132L6 19ZM22 18.5H10.5V19.5H22V18.5Z"
      fill="#182129"
    />
  </Icon>
);

export const BlueDAIIcon = (props: IconProps) => (
  <Icon width="28" height="28" viewBox="0 0 28 28" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM7 22H13.0346C14.9278 22 16.5419 21.6797 17.8768 21.0391C19.2118 20.3932 20.2312 19.4714 20.9351 18.2734C21.1713 17.8749 21.3682 17.4504 21.5258 17H25V15H21.9526C21.9842 14.6693 22 14.3281 22 13.9766C22 13.6414 21.9857 13.3159 21.957 13H25V11H21.5413C21.3831 10.5402 21.1841 10.1079 20.9442 9.70312C20.2464 8.51042 19.2421 7.59635 17.9314 6.96094C16.6208 6.32031 15.0522 6 13.2257 6H7V11H5V13H7V15H5V17H7V22ZM18.5322 17.1953C18.5662 17.1312 18.599 17.0661 18.6305 17H9.8125V19.8906H12.8799C14.2998 19.8906 15.48 19.6615 16.4205 19.2031C17.361 18.7396 18.0649 18.0703 18.5322 17.1953ZM9.8125 15H19.1774C19.2145 14.6741 19.233 14.333 19.233 13.9766C19.233 13.6371 19.2159 13.3116 19.1818 13H9.8125V15ZM9.8125 11H18.6422C18.6071 10.9258 18.5704 10.8529 18.5322 10.7812C18.071 9.90625 17.3823 9.24219 16.466 8.78906C15.5498 8.33594 14.412 8.10938 13.0528 8.10938H9.8125V11Z"
      fill="#1D8AED"
    />
  </Icon>
);

export const PoktBlueIcon = (props: IconProps) => (
  <Icon width="285" height="285" viewBox="0 0 285 285" {...props}>
    <path
      d="M183.946 6.14249V59.3213C183.946 76.5543 169.969 90.5224 152.735 90.5105H152.279V90.5063C143.627 90.4472 135.862 90.5105 135.862 90.5105C134.379 90.5105 132.765 90.3468 131.339 90.4945C121.61 91.4939 113.194 95.9094 106.087 103.738C105.889 103.956 105.704 104.183 105.509 104.403C99.8063 111.814 96.6527 121.363 96.6527 131.68V132.185C96.6527 138.821 98.0007 145.133 100.472 150.779C102.949 156.433 101.686 163 96.9532 166.961C92.3074 170.851 86.7996 175.424 83.0823 178.396C72.3209 166.173 66.0038 150.181 66.0038 132.693V132.185C66.0038 94.1933 96.3995 62.5288 137.686 62.5288H152.605V0.395874C149.263 0.162048 145.901 0 142.5 0C63.799 0 0 63.7992 0 142.5C0 206.782 42.5718 261.104 101.053 278.858V226.095C101.053 208.682 115.171 194.568 132.584 194.571L132.72 194.572V194.574C141.372 194.635 149.138 194.572 149.138 194.572C150.621 194.572 152.233 194.735 153.66 194.587C163.389 193.586 171.806 189.173 178.91 181.342C179.11 181.124 179.296 180.897 179.49 180.677C185.19 173.268 188.345 163.72 188.345 153.401V152.895C188.345 147.721 186.17 140.828 183.991 135.22C181.576 129.009 183.434 121.877 188.543 117.599C192.96 113.911 197.418 110.272 201.917 106.684C212.678 118.906 218.995 134.899 218.995 152.387V152.895C218.995 190.889 188.6 222.551 147.313 222.551H132.392V284.604C135.735 284.838 139.097 285 142.5 285C221.2 285 285 221.201 285 142.5C285 78.218 242.427 23.8963 183.946 6.14249Z"
      fill="#1D8AED"
    />
  </Icon>
);
