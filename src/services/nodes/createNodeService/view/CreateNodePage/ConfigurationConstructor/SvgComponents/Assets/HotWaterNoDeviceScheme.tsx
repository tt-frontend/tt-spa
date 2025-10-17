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

export const HotWaterNoDeviceScheme: FC<Props> = ({
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
        opacity="0.5"
        x="26.4902"
        y="131"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#FF8C68"
      />
      <rect
        opacity="0.5"
        x="26"
        y="144"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#FF8C68"
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
        <g filter="url(#filter0_dd_218_146)">
          <path
            d="M203.849 121.606H234.151C236.494 121.606 238.394 123.506 238.394 125.849V156.151C238.394 158.494 236.494 160.394 234.151 160.394H203.849C201.506 160.394 199.606 158.494 199.606 156.151V125.849C199.606 123.506 201.506 121.606 203.849 121.606Z"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="1.21212"
          />
          <mask id="path-9-inside-1_218_146" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M218.394 147.665C221.741 147.665 224.455 144.952 224.455 141.605C224.455 138.258 221.741 135.544 218.394 135.544C215.047 135.544 212.334 138.258 212.334 141.605C212.334 144.952 215.047 147.665 218.394 147.665ZM218.394 148.877C221.086 148.877 223.437 147.415 224.694 145.241H226.879H228.091V144.029V139.181V137.968H226.879H224.694C223.437 135.795 221.086 134.332 218.394 134.332C215.702 134.332 213.352 135.795 212.094 137.968H209.909H208.697V139.181V144.029V145.241H209.909H212.094C213.352 147.415 215.702 148.877 218.394 148.877ZM226.879 144.029H225.253C225.521 143.271 225.667 142.455 225.667 141.605C225.667 140.755 225.521 139.939 225.253 139.181H226.879V144.029ZM209.909 139.181H211.535C211.267 139.939 211.122 140.755 211.122 141.605C211.122 142.455 211.267 143.271 211.535 144.029H209.909L209.909 139.181ZM215.97 140.393V139.181H220.818V140.393H215.97ZM214.758 139.181C214.758 138.511 215.301 137.968 215.97 137.968H220.818C221.488 137.968 222.031 138.511 222.031 139.181V140.393C222.031 141.062 221.488 141.605 220.818 141.605H215.97C215.301 141.605 214.758 141.062 214.758 140.393V139.181ZM215.97 142.817H217.182V144.029H215.97V142.817ZM220.818 142.817H219.606V144.029H220.818V142.817Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M218.394 147.665C221.741 147.665 224.455 144.952 224.455 141.605C224.455 138.258 221.741 135.544 218.394 135.544C215.047 135.544 212.334 138.258 212.334 141.605C212.334 144.952 215.047 147.665 218.394 147.665ZM218.394 148.877C221.086 148.877 223.437 147.415 224.694 145.241H226.879H228.091V144.029V139.181V137.968H226.879H224.694C223.437 135.795 221.086 134.332 218.394 134.332C215.702 134.332 213.352 135.795 212.094 137.968H209.909H208.697V139.181V144.029V145.241H209.909H212.094C213.352 147.415 215.702 148.877 218.394 148.877ZM226.879 144.029H225.253C225.521 143.271 225.667 142.455 225.667 141.605C225.667 140.755 225.521 139.939 225.253 139.181H226.879V144.029ZM209.909 139.181H211.535C211.267 139.939 211.122 140.755 211.122 141.605C211.122 142.455 211.267 143.271 211.535 144.029H209.909L209.909 139.181ZM215.97 140.393V139.181H220.818V140.393H215.97ZM214.758 139.181C214.758 138.511 215.301 137.968 215.97 137.968H220.818C221.488 137.968 222.031 138.511 222.031 139.181V140.393C222.031 141.062 221.488 141.605 220.818 141.605H215.97C215.301 141.605 214.758 141.062 214.758 140.393V139.181ZM215.97 142.817H217.182V144.029H215.97V142.817ZM220.818 142.817H219.606V144.029H220.818V142.817Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="2.42424"
            mask="url(#path-9-inside-1_218_146)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(183 114) scale(1.1)"
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
          id="filter0_dd_218_146"
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
            result="effect1_dropShadow_218_146"
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
            in2="effect1_dropShadow_218_146"
            result="effect2_dropShadow_218_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_218_146"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
