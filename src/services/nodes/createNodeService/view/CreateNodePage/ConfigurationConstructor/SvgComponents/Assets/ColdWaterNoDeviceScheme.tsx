import { FC } from 'react';
import './svg.css';
import {
  CreatePipeHousingMeteringDeviceInNodeRequest,
  EHousingMeteringDeviceType,
} from 'api/types';
import { CommunicationPipePayload } from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';

type Props = {
  updateCommonDeviceRequestPayload: (
    payload: Partial<
      CreatePipeHousingMeteringDeviceInNodeRequest & {
        pipeId: number;
      }
    >,
  ) => void;
  feedFlow: CommunicationPipePayload | undefined;
  openAddCommonDeviceModal: () => void;
};

export const ColdWaterNoDeviceScheme: FC<Props> = ({
  updateCommonDeviceRequestPayload,
  openAddCommonDeviceModal,
  feedFlow,
}) => {
  const is1 = Boolean(feedFlow?.devices?.[0]);

  return (
    <svg
      width="557"
      height="281"
      viewBox="0 0 557 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.5"
        x="26.4902"
        y="131"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#79AFFF"
      />
      <rect
        opacity="0.5"
        x="26"
        y="144"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#79AFFF"
      />
      <rect
        x="407.561"
        y="0.424828"
        width="148.69"
        height="279.537"
        rx="3.57517"
        fill="white"
        stroke="#DCDEE4"
        strokeWidth="0.849655"
      />
      <path
        d="M21.6921 134.3C21.858 134.134 21.858 133.866 21.6921 133.7L18.9885 130.996C18.8226 130.83 18.5536 130.83 18.3877 130.996C18.2218 131.162 18.2218 131.431 18.3877 131.597L20.7909 134L18.3877 136.403C18.2218 136.569 18.2218 136.838 18.3877 137.004C18.5536 137.17 18.8226 137.17 18.9885 137.004L21.6921 134.3ZM1 134V134.425H21.3917V134V133.575H1V134Z"
        fill="black"
      />
      <path
        d="M0.699479 147.3C0.533574 147.134 0.533574 146.866 0.699479 146.7L3.40307 143.996C3.56897 143.83 3.83796 143.83 4.00386 143.996C4.16977 144.162 4.16977 144.431 4.00386 144.597L1.60067 147L4.00386 149.403C4.16977 149.569 4.16977 149.838 4.00386 150.004C3.83796 150.17 3.56897 150.17 3.40307 150.004L0.699479 147.3ZM21.3916 147V147.425H0.999878V147V146.575H21.3916V147Z"
        fill="black"
      />
      <path
        d="M435.474 134.3C435.64 134.134 435.64 133.866 435.474 133.7L432.771 130.996C432.605 130.83 432.336 130.83 432.17 130.996C432.004 131.162 432.004 131.431 432.17 131.597L434.573 134L432.17 136.403C432.004 136.569 432.004 136.838 432.17 137.004C432.336 137.17 432.605 137.17 432.771 137.004L435.474 134.3ZM414.782 134V134.425H435.174V134V133.575H414.782V134Z"
        fill="black"
      />
      <path
        d="M414.482 147.3C414.316 147.134 414.316 146.866 414.482 146.7L417.185 143.996C417.351 143.83 417.62 143.83 417.786 143.996C417.952 144.162 417.952 144.431 417.786 144.597L415.383 147L417.786 149.403C417.952 149.569 417.952 149.838 417.786 150.004C417.62 150.17 417.351 150.17 417.185 150.004L414.482 147.3ZM435.174 147V147.425H414.782V147V146.575H435.174V147Z"
        fill="black"
      />

      {is1 ? (
        <g
          id="Group 1082"
          filter="url(#filter0_dd_212_6787)"
          transform="translate(138 92) scale(1.1)"
        >
          <path
            id="Rectangle 1345"
            d="M51.0498 30.1631H72.291C73.9333 30.1631 75.2655 31.4944 75.2656 33.1367V54.3779C75.2656 56.0203 73.9334 57.3525 72.291 57.3525H51.0498C49.4075 57.3524 48.0762 56.0203 48.0762 54.3779V33.1367C48.0763 31.4945 49.4076 30.1632 51.0498 30.1631Z"
            fill="white"
            stroke="#f3f3f6"
            strokeWidth="0.849655"
          />
          <g id="icon16/menu/meter devices">
            <g id="Union">
              <mask id="path-13-inside-1_212_6787" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.2465 48.4302C63.5927 48.4302 65.4947 46.5282 65.4947 44.1819C65.4947 41.8357 63.5927 39.9336 61.2465 39.9336C58.9002 39.9336 56.9982 41.8357 56.9982 44.1819C56.9982 46.5282 58.9002 48.4302 61.2465 48.4302ZM61.2465 49.2798C63.1334 49.2798 64.7809 48.2547 65.6624 46.7309H67.194H68.0437V45.8812V42.4826V41.633H67.194H65.6624C64.7809 40.1092 63.1334 39.084 61.2465 39.084C59.3595 39.084 57.712 40.1092 56.8305 41.633H55.2989H54.4492V42.4826V45.8812V46.7309H55.2989H56.8305C57.712 48.2547 59.3595 49.2798 61.2465 49.2798ZM67.194 45.8812H66.0543C66.2422 45.3497 66.3444 44.7778 66.3444 44.1819C66.3444 43.5861 66.2422 43.0141 66.0543 42.4826H67.194V45.8812ZM55.2989 42.4826H56.4386C56.2507 43.0141 56.1485 43.5861 56.1485 44.1819C56.1485 44.7778 56.2507 45.3497 56.4386 45.8812H55.2989L55.2989 42.4826ZM59.5472 43.3323V42.4826H62.9458V43.3323H59.5472ZM58.6975 42.4826C58.6975 42.0134 59.0779 41.633 59.5472 41.633H62.9458C63.415 41.633 63.7954 42.0134 63.7954 42.4826V43.3323C63.7954 43.8015 63.415 44.1819 62.9458 44.1819H59.5472C59.0779 44.1819 58.6975 43.8015 58.6975 43.3323V42.4826ZM59.5472 45.0316H60.3968V45.8812H59.5472V45.0316ZM62.9458 45.0316H62.0961V45.8812H62.9458V45.0316Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.2465 48.4302C63.5927 48.4302 65.4947 46.5282 65.4947 44.1819C65.4947 41.8357 63.5927 39.9336 61.2465 39.9336C58.9002 39.9336 56.9982 41.8357 56.9982 44.1819C56.9982 46.5282 58.9002 48.4302 61.2465 48.4302ZM61.2465 49.2798C63.1334 49.2798 64.7809 48.2547 65.6624 46.7309H67.194H68.0437V45.8812V42.4826V41.633H67.194H65.6624C64.7809 40.1092 63.1334 39.084 61.2465 39.084C59.3595 39.084 57.712 40.1092 56.8305 41.633H55.2989H54.4492V42.4826V45.8812V46.7309H55.2989H56.8305C57.712 48.2547 59.3595 49.2798 61.2465 49.2798ZM67.194 45.8812H66.0543C66.2422 45.3497 66.3444 44.7778 66.3444 44.1819C66.3444 43.5861 66.2422 43.0141 66.0543 42.4826H67.194V45.8812ZM55.2989 42.4826H56.4386C56.2507 43.0141 56.1485 43.5861 56.1485 44.1819C56.1485 44.7778 56.2507 45.3497 56.4386 45.8812H55.2989L55.2989 42.4826ZM59.5472 43.3323V42.4826H62.9458V43.3323H59.5472ZM58.6975 42.4826C58.6975 42.0134 59.0779 41.633 59.5472 41.633H62.9458C63.415 41.633 63.7954 42.0134 63.7954 42.4826V43.3323C63.7954 43.8015 63.415 44.1819 62.9458 44.1819H59.5472C59.0779 44.1819 58.6975 43.8015 58.6975 43.3323V42.4826ZM59.5472 45.0316H60.3968V45.8812H59.5472V45.0316ZM62.9458 45.0316H62.0961V45.8812H62.9458V45.0316Z"
                fill="#272F5A"
                stroke="#272F5A"
                strokeWidth="1.69931"
                mask="url(#path-13-inside-1_212_6787)"
              />
            </g>
          </g>
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(180 121) scale(0.8)"
          onClick={() => {
            updateCommonDeviceRequestPayload({
              pipeId: Number(feedFlow?.id),
              housingMeteringDeviceType: EHousingMeteringDeviceType.FlowMeter,
            });
            openAddCommonDeviceModal();
          }}
        >
          <rect
            x="16"
            y="8"
            width="33"
            height="33"
            rx="4"
            fill="#189EE9"
            className="svgStyle"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.5 19H31.5V24.5H26V25.5H31.5V31H32.5V25.5H38V24.5H32.5V19Z"
            fill="white"
            stroke="white"
            strokeWidth="0.3"
          />
        </g>
      )}

      <defs>
        <filter
          id="filter0_dd_217_131"
          x="179.606"
          y="111.303"
          width="78.7879"
          height="78.7879"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="9.69697" />
          <feGaussianBlur stdDeviation="9.69697" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.306823 0 0 0 0 0.364905 0 0 0 0 0.570833 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_217_131"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.84849" />
          <feGaussianBlur stdDeviation="2.42424" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.306823 0 0 0 0 0.364905 0 0 0 0 0.570833 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_217_131"
            result="effect2_dropShadow_217_131"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_217_131"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
