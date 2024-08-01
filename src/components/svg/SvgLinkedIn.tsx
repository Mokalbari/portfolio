import type { SvgProps } from "../../types/SvgProps"

const SvgLinkedIn = ({ size = "25" }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lien vers LinkedIn</title>
      <g clip-path="url(#clip0_30_27)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5 0C19.3989 0 25 5.60107 25 12.5C25 19.3989 19.3989 25 12.5 25C5.60107 25 0 19.3989 0 12.5C0 5.60107 5.60107 0 12.5 0ZM8.59194 19.525V9.76318H5.34663V19.525H8.59194ZM20.2921 19.525V13.927C20.2921 10.9285 18.6912 9.53364 16.5563 9.53364C14.8349 9.53364 14.0638 10.4804 13.6321 11.1453V9.76318H10.3876C10.4306 10.6791 10.3876 19.525 10.3876 19.525H13.632V14.0733C13.632 13.7815 13.653 13.4898 13.739 13.2812C13.9731 12.6985 14.5074 12.0948 15.4038 12.0948C16.5773 12.0948 17.0475 12.9903 17.0475 14.302V19.525H20.2921ZM6.99121 5.05615C5.88086 5.05615 5.15542 5.78613 5.15542 6.74292C5.15542 7.67954 5.85879 8.42964 6.94824 8.42964H6.96919C8.10078 8.42964 8.80513 7.67954 8.80513 6.74292C8.78413 5.78613 8.10083 5.05615 6.99121 5.05615Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_30_27">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgLinkedIn
