import { FC } from 'react';
import './svg.css';
import { CreatePipeHousingMeteringDeviceInNodeRequest } from 'api/types';
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

export const HotWaterSupplyNoBackflowScheme: FC<Props> = ({
  updateCommonDeviceRequestPayload,
  openAddCommonDeviceModal,
  feedFlow,
}) => {
  const is1 = Boolean(feedFlow?.devices?.[0]);

  const is2 = Boolean(feedFlow?.devices?.[1]);

  return (
    <svg
      width="556"
      height="281"
      viewBox="0 0 556 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="25.49"
        y="137"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#FF8C68"
      />
      <rect
        x="406.56"
        y="0.424828"
        width="148.69"
        height="279.537"
        rx="3.57517"
        fill="white"
        stroke="#DCDEE4"
        strokeWidth="0.849655"
      />
      <path
        d="M20.6924 140.3C20.8583 140.134 20.8583 139.866 20.6924 139.7L17.9888 136.996C17.8229 136.83 17.5539 136.83 17.388 136.996C17.2221 137.162 17.2221 137.431 17.388 137.597L19.7912 140L17.388 142.403C17.2221 142.569 17.2221 142.838 17.388 143.004C17.5539 143.17 17.8229 143.17 17.9888 143.004L20.6924 140.3ZM0.000244141 140V140.425H20.392V140V139.575H0.000244141V140Z"
        fill="black"
      />
      <path
        d="M434.475 140.3C434.64 140.134 434.64 139.866 434.475 139.7L431.771 136.996C431.605 136.83 431.336 136.83 431.17 136.996C431.004 137.162 431.004 137.431 431.17 137.597L433.573 140L431.17 142.403C431.004 142.569 431.004 142.838 431.17 143.004C431.336 143.17 431.605 143.17 431.771 143.004L434.475 140.3ZM413.782 140V140.425H434.174V140V139.575H413.782V140Z"
        fill="black"
      />

      {is1 ? (
        <g filter="url(#filter0_dd_210_30840)">
          <path
            d="M124.05 126.425H145.291C146.934 126.425 148.266 127.756 148.266 129.398V150.64C148.266 152.282 146.934 153.614 145.291 153.614H124.05C122.408 153.614 121.076 152.282 121.076 150.64V129.398C121.077 127.756 122.408 126.425 124.05 126.425Z"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="0.849655"
          />
          <mask id="path-6-inside-1_210_30840" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M134.246 144.692C136.592 144.692 138.494 142.79 138.494 140.444C138.494 138.098 136.592 136.196 134.246 136.196C131.9 136.196 129.998 138.098 129.998 140.444C129.998 142.79 131.9 144.692 134.246 144.692ZM134.246 145.542C136.133 145.542 137.781 144.517 138.662 142.993H140.194H141.043V142.143V138.745V137.895H140.194H138.662C137.781 136.371 136.133 135.346 134.246 135.346C132.359 135.346 130.712 136.371 129.83 137.895H128.299H127.449V138.745V142.143V142.993H128.299H129.83C130.712 144.517 132.359 145.542 134.246 145.542ZM140.194 142.143H139.054C139.242 141.612 139.344 141.04 139.344 140.444C139.344 139.848 139.242 139.276 139.054 138.745H140.194V142.143ZM128.299 138.745H129.438C129.251 139.276 129.148 139.848 129.148 140.444C129.148 141.04 129.251 141.612 129.438 142.143H128.299L128.299 138.745ZM132.547 139.594V138.745H135.946V139.594H132.547ZM131.697 138.745C131.697 138.276 132.078 137.895 132.547 137.895H135.946C136.415 137.895 136.795 138.276 136.795 138.745V139.594C136.795 140.064 136.415 140.444 135.946 140.444H132.547C132.078 140.444 131.697 140.064 131.697 139.594V138.745ZM132.547 141.294H133.397V142.143H132.547V141.294ZM135.946 141.294H135.096V142.143H135.946V141.294Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M134.246 144.692C136.592 144.692 138.494 142.79 138.494 140.444C138.494 138.098 136.592 136.196 134.246 136.196C131.9 136.196 129.998 138.098 129.998 140.444C129.998 142.79 131.9 144.692 134.246 144.692ZM134.246 145.542C136.133 145.542 137.781 144.517 138.662 142.993H140.194H141.043V142.143V138.745V137.895H140.194H138.662C137.781 136.371 136.133 135.346 134.246 135.346C132.359 135.346 130.712 136.371 129.83 137.895H128.299H127.449V138.745V142.143V142.993H128.299H129.83C130.712 144.517 132.359 145.542 134.246 145.542ZM140.194 142.143H139.054C139.242 141.612 139.344 141.04 139.344 140.444C139.344 139.848 139.242 139.276 139.054 138.745H140.194V142.143ZM128.299 138.745H129.438C129.251 139.276 129.148 139.848 129.148 140.444C129.148 141.04 129.251 141.612 129.438 142.143H128.299L128.299 138.745ZM132.547 139.594V138.745H135.946V139.594H132.547ZM131.697 138.745C131.697 138.276 132.078 137.895 132.547 137.895H135.946C136.415 137.895 136.795 138.276 136.795 138.745V139.594C136.795 140.064 136.415 140.444 135.946 140.444H132.547C132.078 140.444 131.697 140.064 131.697 139.594V138.745ZM132.547 141.294H133.397V142.143H132.547V141.294ZM135.946 141.294H135.096V142.143H135.946V141.294Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="1.69931"
            mask="url(#path-6-inside-1_210_30840)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(109 120) scale(0.8)"
          onClick={() => {
            updateCommonDeviceRequestPayload({
              pipeId: Number(feedFlow?.id),
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

      {is2 ? (
        <g filter="url(#filter1_dd_210_30840)">
          <rect
            x="285.425"
            y="126.425"
            width="27.189"
            height="27.189"
            rx="2.97379"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="0.849655"
          />
          <mask id="path-8-inside-2_210_30840" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M298.595 144.692C300.941 144.692 302.843 142.79 302.843 140.444C302.843 138.098 300.941 136.196 298.595 136.196C296.249 136.196 294.347 138.098 294.347 140.444C294.347 142.79 296.249 144.692 298.595 144.692ZM298.595 145.542C300.482 145.542 302.129 144.517 303.011 142.993H304.542H305.392V142.143V138.745V137.895H304.542H303.011C302.129 136.371 300.482 135.346 298.595 135.346C296.708 135.346 295.06 136.371 294.179 137.895H292.647H291.798V138.745V142.143V142.993H292.647H294.179C295.06 144.517 296.708 145.542 298.595 145.542ZM304.542 142.143H303.403C303.591 141.612 303.693 141.04 303.693 140.444C303.693 139.848 303.591 139.276 303.403 138.745H304.542V142.143ZM292.647 138.745H293.787C293.599 139.276 293.497 139.848 293.497 140.444C293.497 141.04 293.599 141.612 293.787 142.143H292.647L292.647 138.745ZM296.896 139.594V138.745H300.294V139.594H296.896ZM296.046 138.745C296.046 138.276 296.426 137.895 296.896 137.895H300.294C300.763 137.895 301.144 138.276 301.144 138.745V139.594C301.144 140.064 300.763 140.444 300.294 140.444H296.896C296.426 140.444 296.046 140.064 296.046 139.594V138.745ZM296.896 141.294H297.745V142.143H296.896V141.294ZM300.294 141.294H299.445V142.143H300.294V141.294Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M298.595 144.692C300.941 144.692 302.843 142.79 302.843 140.444C302.843 138.098 300.941 136.196 298.595 136.196C296.249 136.196 294.347 138.098 294.347 140.444C294.347 142.79 296.249 144.692 298.595 144.692ZM298.595 145.542C300.482 145.542 302.129 144.517 303.011 142.993H304.542H305.392V142.143V138.745V137.895H304.542H303.011C302.129 136.371 300.482 135.346 298.595 135.346C296.708 135.346 295.06 136.371 294.179 137.895H292.647H291.798V138.745V142.143V142.993H292.647H294.179C295.06 144.517 296.708 145.542 298.595 145.542ZM304.542 142.143H303.403C303.591 141.612 303.693 141.04 303.693 140.444C303.693 139.848 303.591 139.276 303.403 138.745H304.542V142.143ZM292.647 138.745H293.787C293.599 139.276 293.497 139.848 293.497 140.444C293.497 141.04 293.599 141.612 293.787 142.143H292.647L292.647 138.745ZM296.896 139.594V138.745H300.294V139.594H296.896ZM296.046 138.745C296.046 138.276 296.426 137.895 296.896 137.895H300.294C300.763 137.895 301.144 138.276 301.144 138.745V139.594C301.144 140.064 300.763 140.444 300.294 140.444H296.896C296.426 140.444 296.046 140.064 296.046 139.594V138.745ZM296.896 141.294H297.745V142.143H296.896V141.294ZM300.294 141.294H299.445V142.143H300.294V141.294Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="1.69931"
            mask="url(#path-8-inside-2_210_30840)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(273 120) scale(0.8)"
          onClick={() => {
            updateCommonDeviceRequestPayload({
              pipeId: Number(feedFlow?.id),
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
          id="filter0_dd_210_30840"
          x="107.057"
          y="119.203"
          width="55.2276"
          height="55.2275"
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
          <feOffset dy="6.79724" />
          <feGaussianBlur stdDeviation="6.79724" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.306823 0 0 0 0 0.364905 0 0 0 0 0.570833 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_210_30840"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.39862" />
          <feGaussianBlur stdDeviation="1.69931" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.306823 0 0 0 0 0.364905 0 0 0 0 0.570833 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_210_30840"
            result="effect2_dropShadow_210_30840"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_210_30840"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_210_30840"
          x="271.406"
          y="119.203"
          width="55.2276"
          height="55.2275"
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
          <feOffset dy="6.79724" />
          <feGaussianBlur stdDeviation="6.79724" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.306823 0 0 0 0 0.364905 0 0 0 0 0.570833 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_210_30840"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.39862" />
          <feGaussianBlur stdDeviation="1.69931" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.306823 0 0 0 0 0.364905 0 0 0 0 0.570833 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_210_30840"
            result="effect2_dropShadow_210_30840"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_210_30840"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
