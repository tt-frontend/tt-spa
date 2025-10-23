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

export const HeatNoHousingMeteringDeviceScheme: FC<Props> = ({
  updateCommonDeviceRequestPayload,
  openAddCommonDeviceModal,
  feedFlow,
}) => {
  const feedFlowdevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );

  const is1 = Boolean(feedFlowdevice);

  return (
    <svg
      width="557"
      height="281"
      viewBox="0 0 557 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="26.49"
        y="131"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#9254DE"
      />
      <rect
        x="26.0002"
        y="144"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#9254DE"
      />
      <rect
        x="407.56"
        y="0.424828"
        width="148.69"
        height="279.537"
        rx="3.57517"
        fill="white"
        stroke="#DCDEE4"
        strokeWidth="0.849655"
      />
      <path
        d="M21.6924 134.3C21.8583 134.134 21.8583 133.866 21.6924 133.7L18.9888 130.996C18.8229 130.83 18.5539 130.83 18.388 130.996C18.2221 131.162 18.2221 131.431 18.388 131.597L20.7912 134L18.388 136.403C18.2221 136.569 18.2221 136.838 18.388 137.004C18.5539 137.17 18.8229 137.17 18.9888 137.004L21.6924 134.3ZM1.00024 134V134.425H21.392V134V133.575H1.00024V134Z"
        fill="black"
      />
      <path
        d="M0.699724 147.3C0.533817 147.134 0.533817 146.866 0.699724 146.7L3.40331 143.996C3.56922 143.83 3.8382 143.83 4.00411 143.996C4.17001 144.162 4.17001 144.431 4.00411 144.597L1.60092 147L4.00411 149.403C4.17001 149.569 4.17001 149.838 4.00411 150.004C3.8382 150.17 3.56922 150.17 3.40331 150.004L0.699724 147.3ZM21.3918 147V147.425H1.00012V147V146.575H21.3918V147Z"
        fill="black"
      />
      <path
        d="M435.475 134.3C435.64 134.134 435.64 133.866 435.475 133.7L432.771 130.996C432.605 130.83 432.336 130.83 432.17 130.996C432.004 131.162 432.004 131.431 432.17 131.597L434.573 134L432.17 136.403C432.004 136.569 432.004 136.838 432.17 137.004C432.336 137.17 432.605 137.17 432.771 137.004L435.475 134.3ZM414.782 134V134.425H435.174V134V133.575H414.782V134Z"
        fill="black"
      />
      <path
        d="M414.482 147.3C414.316 147.134 414.316 146.866 414.482 146.7L417.186 143.996C417.351 143.83 417.62 143.83 417.786 143.996C417.952 144.162 417.952 144.431 417.786 144.597L415.383 147L417.786 149.403C417.952 149.569 417.952 149.838 417.786 150.004C417.62 150.17 417.351 150.17 417.186 150.004L414.482 147.3ZM435.174 147V147.425H414.782V147V146.575H435.174V147Z"
        fill="black"
      />

      {is1 ? (
        <g filter="url(#filter0_dd_210_37760)">
          <path
            d="M203.849 121.606H234.152C236.495 121.606 238.394 123.506 238.394 125.849V156.151C238.394 158.494 236.495 160.394 234.152 160.394H203.849C201.506 160.394 199.607 158.494 199.607 156.151V125.849C199.607 123.506 201.506 121.606 203.849 121.606Z"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="1.21212"
          />
          <mask id="path-9-inside-1_210_37760" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M218.394 147.666C221.742 147.666 224.455 144.953 224.455 141.606C224.455 138.259 221.742 135.545 218.394 135.545C215.047 135.545 212.334 138.259 212.334 141.606C212.334 144.953 215.047 147.666 218.394 147.666ZM218.394 148.878C221.086 148.878 223.437 147.416 224.694 145.242H226.879H228.091V144.03V139.181V137.969H226.879H224.694C223.437 135.796 221.086 134.333 218.394 134.333C215.703 134.333 213.352 135.796 212.095 137.969H209.91H208.698V139.181V144.03V145.242H209.91H212.095C213.352 147.416 215.703 148.878 218.394 148.878ZM226.879 144.03H225.253C225.521 143.272 225.667 142.456 225.667 141.606C225.667 140.756 225.521 139.94 225.253 139.181H226.879V144.03ZM209.91 139.181H211.536C211.268 139.94 211.122 140.756 211.122 141.606C211.122 142.456 211.268 143.272 211.536 144.03H209.91L209.91 139.181ZM215.97 140.394V139.181H220.819V140.394H215.97ZM214.758 139.181C214.758 138.512 215.301 137.969 215.97 137.969H220.819C221.488 137.969 222.031 138.512 222.031 139.181V140.394C222.031 141.063 221.488 141.606 220.819 141.606H215.97C215.301 141.606 214.758 141.063 214.758 140.394V139.181ZM215.97 142.818H217.182V144.03H215.97V142.818ZM220.819 142.818H219.607V144.03H220.819V142.818Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M218.394 147.666C221.742 147.666 224.455 144.953 224.455 141.606C224.455 138.259 221.742 135.545 218.394 135.545C215.047 135.545 212.334 138.259 212.334 141.606C212.334 144.953 215.047 147.666 218.394 147.666ZM218.394 148.878C221.086 148.878 223.437 147.416 224.694 145.242H226.879H228.091V144.03V139.181V137.969H226.879H224.694C223.437 135.796 221.086 134.333 218.394 134.333C215.703 134.333 213.352 135.796 212.095 137.969H209.91H208.698V139.181V144.03V145.242H209.91H212.095C213.352 147.416 215.703 148.878 218.394 148.878ZM226.879 144.03H225.253C225.521 143.272 225.667 142.456 225.667 141.606C225.667 140.756 225.521 139.94 225.253 139.181H226.879V144.03ZM209.91 139.181H211.536C211.268 139.94 211.122 140.756 211.122 141.606C211.122 142.456 211.268 143.272 211.536 144.03H209.91L209.91 139.181ZM215.97 140.394V139.181H220.819V140.394H215.97ZM214.758 139.181C214.758 138.512 215.301 137.969 215.97 137.969H220.819C221.488 137.969 222.031 138.512 222.031 139.181V140.394C222.031 141.063 221.488 141.606 220.819 141.606H215.97C215.301 141.606 214.758 141.063 214.758 140.394V139.181ZM215.97 142.818H217.182V144.03H215.97V142.818ZM220.819 142.818H219.607V144.03H220.819V142.818Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="2.42424"
            mask="url(#path-9-inside-1_210_37760)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(184 115
          ) scale(1.1)"
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
      <text x="182" y="185" fontSize="14" fontWeight="500" fill="#272F5A">
        Расходомер
      </text>

      <defs>
        <filter
          id="filter0_dd_210_37760"
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
            result="effect1_dropShadow_210_37760"
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
            in2="effect1_dropShadow_210_37760"
            result="effect2_dropShadow_210_37760"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_210_37760"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
