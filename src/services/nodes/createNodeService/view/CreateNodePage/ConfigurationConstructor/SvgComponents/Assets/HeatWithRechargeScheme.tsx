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
  recharge: CommunicationPipePayload | undefined;
  feedBackFlow: CommunicationPipePayload | undefined;
  openAddCommonDeviceModal: () => void;
};

export const HeatWithRechargeScheme: FC<Props> = ({
  updateCommonDeviceRequestPayload,
  openAddCommonDeviceModal,
  feedFlow,
  feedBackFlow,
  recharge,
}) => {
  const feedFlowdevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );
  const feedTermodevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType ===
      EHousingMeteringDeviceType.TemperatureSensor,
  );

  const backFlowdevice = feedBackFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );
  const backTermodevice = feedBackFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType ===
      EHousingMeteringDeviceType.TemperatureSensor,
  );

  const rechargeFlowdevice = recharge?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );
  const rechargeTermodevice = recharge?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType ===
      EHousingMeteringDeviceType.TemperatureSensor,
  );

  const is1 = Boolean(feedFlowdevice);

  const is2 = Boolean(feedTermodevice);

  const is3 = Boolean(backFlowdevice);

  const is4 = Boolean(backTermodevice);

  const is5 = Boolean(rechargeFlowdevice);

  const is6 = Boolean(rechargeTermodevice);

  return (
    <svg
      width="556"
      height="281"
      viewBox="0 0 556 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1083">
        <rect
          id="Rectangle 1367"
          x="363"
          y="42"
          width="118"
          height="6.99999"
          rx="3.5"
          transform="rotate(90 363 42)"
          fill="#DCDEE4"
        />
        <rect
          id="Rectangle 1368"
          x="180"
          y="160"
          width="75"
          height="7"
          rx="3.5"
          transform="rotate(90 180 160)"
          fill="#DCDEE4"
        />
        <rect
          id="Rectangle 1364"
          x="25.4902"
          y="40.7832"
          width="385.743"
          height="6.79724"
          rx="3.39862"
          fill="#9254DE"
        />
        <rect
          id="Rectangle 1366"
          x="26"
          y="158"
          width="385"
          height="7"
          rx="3.5"
          fill="#9254DE"
        />
        <path
          id="Rectangle 1369"
          d="M26 232.5C26 230.567 27.567 229 29.5 229H176.5C178.433 229 180 230.567 180 232.5V232.5C180 234.433 178.433 236 176.5 236H29.5C27.567 236 26 234.433 26 232.5V232.5Z"
          fill="#DCDEE4"
        />
        <path
          id="Rectangle 1365"
          d="M408.685 0.424805H553.126C554.299 0.424805 555.25 1.37576 555.25 2.54883V277.837C555.25 279.01 554.299 279.961 553.126 279.961H408.685C407.512 279.961 406.561 279.01 406.561 277.837V2.54883C406.561 1.37581 407.512 0.424879 408.685 0.424805Z"
          fill="white"
          stroke="#DCDEE4"
          strokeWidth="0.849655"
        />
        <path
          id="Vector 112"
          d="M20.6921 45.3316C20.858 45.1657 20.858 44.8968 20.6921 44.7309L17.9885 42.0273C17.8226 41.8614 17.5536 41.8614 17.3877 42.0273C17.2218 42.1932 17.2218 42.4622 17.3877 42.6281L19.7909 45.0312L17.3877 47.4344C17.2218 47.6003 17.2218 47.8693 17.3877 48.0352C17.5536 48.2011 17.8226 48.2011 17.9885 48.0352L20.6921 45.3316ZM0 45.0312V45.4561H20.3917V45.0312V44.6064H0V45.0312Z"
          fill="black"
        />
        <path
          id="Vector 116"
          d="M20.6921 233.3C20.858 233.134 20.858 232.866 20.6921 232.7L17.9885 229.996C17.8226 229.83 17.5536 229.83 17.3877 229.996C17.2218 230.162 17.2218 230.431 17.3877 230.597L19.7909 233L17.3877 235.403C17.2218 235.569 17.2218 235.838 17.3877 236.004C17.5536 236.17 17.8226 236.17 17.9885 236.004L20.6921 233.3ZM0 233V233.425H20.3917V233V232.575H0V233Z"
          fill="black"
        />
        <path
          id="Vector 114"
          d="M434.474 45.3316C434.64 45.1657 434.64 44.8968 434.474 44.7309L431.771 42.0273C431.605 41.8614 431.336 41.8614 431.17 42.0273C431.004 42.1932 431.004 42.4622 431.17 42.6281L433.573 45.0312L431.17 47.4344C431.004 47.6003 431.004 47.8693 431.17 48.0352C431.336 48.2011 431.605 48.2011 431.771 48.0352L434.474 45.3316ZM413.782 45.0312V45.4561H434.174V45.0312V44.6064H413.782V45.0312Z"
          fill="black"
        />
        <path
          id="Vector 113"
          d="M-0.299544 162.256C-0.465449 162.091 -0.465449 161.822 -0.299544 161.656L2.40404 158.952C2.56995 158.786 2.83893 158.786 3.00484 158.952C3.17074 159.118 3.17074 159.387 3.00484 159.553L0.601651 161.956L3.00484 164.359C3.17074 164.525 3.17074 164.794 3.00484 164.96C2.83893 165.126 2.56995 165.126 2.40404 164.96L-0.299544 162.256ZM20.3926 161.956V162.381H0.000854492V161.956V161.531H20.3926V161.956Z"
          fill="black"
        />
        <path
          id="Vector 115"
          d="M413.482 162.256C413.316 162.091 413.316 161.822 413.482 161.656L416.185 158.952C416.351 158.786 416.62 158.786 416.786 158.952C416.952 159.118 416.952 159.387 416.786 159.553L414.383 161.956L416.786 164.359C416.952 164.525 416.952 164.794 416.786 164.96C416.62 165.126 416.351 165.126 416.185 164.96L413.482 162.256ZM434.174 161.956V162.381H413.782V161.956V161.531H434.174V161.956Z"
          fill="black"
        />

        {is1 ? (
          <g id="Group 1082" filter="url(#filter0_dd_212_6787)">
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
            transform="translate(35 25) scale(0.8)"
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
        {is5 ? (
          <g id="Group 1085" filter="url(#filter1_dd_212_6787)">
            <path
              id="Rectangle 1345_2"
              d="M51.3984 218.425H72.6396C74.282 218.425 75.6142 219.756 75.6143 221.398V242.64C75.6143 244.282 74.282 245.614 72.6396 245.614H51.3984C49.7561 245.614 48.4248 244.282 48.4248 242.64V221.398C48.4249 219.756 49.7562 218.425 51.3984 218.425Z"
              fill="white"
              stroke="#F3F5F6"
              strokeWidth="0.849655"
            />
            <g id="icon16/menu/meter devices_2">
              <g id="Union_2">
                <mask id="path-15-inside-2_212_6787" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.5941 236.692C63.9404 236.692 65.8424 234.79 65.8424 232.444C65.8424 230.097 63.9404 228.195 61.5941 228.195C59.2479 228.195 57.3458 230.097 57.3458 232.444C57.3458 234.79 59.2479 236.692 61.5941 236.692ZM61.5941 237.542C63.4811 237.542 65.1286 236.516 66.01 234.993H67.5417H68.3914V234.143V230.744V229.895H67.5417H66.01C65.1286 228.371 63.4811 227.346 61.5941 227.346C59.7072 227.346 58.0597 228.371 57.1782 229.895H55.6465H54.7969V230.744V234.143V234.993H55.6465H57.1782C58.0597 236.516 59.7072 237.542 61.5941 237.542ZM67.5417 234.143H66.402C66.5898 233.611 66.692 233.039 66.692 232.444C66.692 231.848 66.5898 231.276 66.402 230.744H67.5417V234.143ZM55.6465 230.744H56.7863C56.5984 231.276 56.4962 231.848 56.4962 232.444C56.4962 233.039 56.5984 233.611 56.7863 234.143H55.6465L55.6465 230.744ZM59.8948 231.594V230.744H63.2934V231.594H59.8948ZM59.0452 230.744C59.0452 230.275 59.4256 229.895 59.8948 229.895H63.2934C63.7627 229.895 64.1431 230.275 64.1431 230.744V231.594C64.1431 232.063 63.7627 232.444 63.2934 232.444H59.8948C59.4256 232.444 59.0452 232.063 59.0452 231.594V230.744ZM59.8948 233.293H60.7445V234.143H59.8948V233.293ZM63.2934 233.293H62.4438V234.143H63.2934V233.293Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.5941 236.692C63.9404 236.692 65.8424 234.79 65.8424 232.444C65.8424 230.097 63.9404 228.195 61.5941 228.195C59.2479 228.195 57.3458 230.097 57.3458 232.444C57.3458 234.79 59.2479 236.692 61.5941 236.692ZM61.5941 237.542C63.4811 237.542 65.1286 236.516 66.01 234.993H67.5417H68.3914V234.143V230.744V229.895H67.5417H66.01C65.1286 228.371 63.4811 227.346 61.5941 227.346C59.7072 227.346 58.0597 228.371 57.1782 229.895H55.6465H54.7969V230.744V234.143V234.993H55.6465H57.1782C58.0597 236.516 59.7072 237.542 61.5941 237.542ZM67.5417 234.143H66.402C66.5898 233.611 66.692 233.039 66.692 232.444C66.692 231.848 66.5898 231.276 66.402 230.744H67.5417V234.143ZM55.6465 230.744H56.7863C56.5984 231.276 56.4962 231.848 56.4962 232.444C56.4962 233.039 56.5984 233.611 56.7863 234.143H55.6465L55.6465 230.744ZM59.8948 231.594V230.744H63.2934V231.594H59.8948ZM59.0452 230.744C59.0452 230.275 59.4256 229.895 59.8948 229.895H63.2934C63.7627 229.895 64.1431 230.275 64.1431 230.744V231.594C64.1431 232.063 63.7627 232.444 63.2934 232.444H59.8948C59.4256 232.444 59.0452 232.063 59.0452 231.594V230.744ZM59.8948 233.293H60.7445V234.143H59.8948V233.293ZM63.2934 233.293H62.4438V234.143H63.2934V233.293Z"
                  fill="#272F5A"
                  stroke="#272F5A"
                  strokeWidth="1.69931"
                  mask="url(#path-15-inside-2_212_6787)"
                />
              </g>
            </g>
          </g>
        ) : (
          <g
            filter="url(#filter0_dd_22376_18901)"
            transform="translate(36 212) scale(0.8)"
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(recharge?.id),
                housingMeteringDeviceType: EHousingMeteringDeviceType.FlowMeter,
              });
              openAddCommonDeviceModal();
            }}
          >
            <rect
              className="svgStyle"
              x="16"
              y="8"
              width="33"
              height="33"
              rx="4"
              fill="#189EE9"
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

        {is4 ? (
          <g id="Group 1083_2" filter="url(#filter2_dd_212_6787)">
            <path
              id="Rectangle 1345_3"
              d="M213.398 147.425H234.64C236.282 147.425 237.614 148.756 237.614 150.398V171.64C237.614 173.282 236.282 174.614 234.64 174.614H213.398C211.756 174.614 210.425 173.282 210.425 171.64V150.398C210.425 148.756 211.756 147.425 213.398 147.425Z"
              fill="white"
              stroke="#F3F5F6"
              strokeWidth="0.849655"
            />
            <g id="icon16/menu/meter devices_3">
              <g id="Union_3">
                <mask id="path-17-inside-3_212_6787" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M223.594 166.692C225.94 166.692 227.842 164.79 227.842 162.444C227.842 160.097 225.94 158.195 223.594 158.195C221.248 158.195 219.346 160.097 219.346 162.444C219.346 164.79 221.248 166.692 223.594 166.692ZM223.594 167.542C225.481 167.542 227.129 166.516 228.01 164.993H229.542H230.391V164.143V160.744V159.895H229.542H228.01C227.129 158.371 225.481 157.346 223.594 157.346C221.707 157.346 220.06 158.371 219.178 159.895H217.647H216.797V160.744V164.143V164.993H217.647H219.178C220.06 166.516 221.707 167.542 223.594 167.542ZM229.542 164.143H228.402C228.59 163.611 228.692 163.039 228.692 162.444C228.692 161.848 228.59 161.276 228.402 160.744H229.542V164.143ZM217.647 160.744H218.786C218.598 161.276 218.496 161.848 218.496 162.444C218.496 163.039 218.598 163.611 218.786 164.143H217.647L217.647 160.744ZM221.895 161.594V160.744H225.293V161.594H221.895ZM221.045 160.744C221.045 160.275 221.426 159.895 221.895 159.895H225.293C225.763 159.895 226.143 160.275 226.143 160.744V161.594C226.143 162.063 225.763 162.444 225.293 162.444H221.895C221.426 162.444 221.045 162.063 221.045 161.594V160.744ZM221.895 163.293H222.744V164.143H221.895V163.293ZM225.293 163.293H224.444V164.143H225.293V163.293Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M223.594 166.692C225.94 166.692 227.842 164.79 227.842 162.444C227.842 160.097 225.94 158.195 223.594 158.195C221.248 158.195 219.346 160.097 219.346 162.444C219.346 164.79 221.248 166.692 223.594 166.692ZM223.594 167.542C225.481 167.542 227.129 166.516 228.01 164.993H229.542H230.391V164.143V160.744V159.895H229.542H228.01C227.129 158.371 225.481 157.346 223.594 157.346C221.707 157.346 220.06 158.371 219.178 159.895H217.647H216.797V160.744V164.143V164.993H217.647H219.178C220.06 166.516 221.707 167.542 223.594 167.542ZM229.542 164.143H228.402C228.59 163.611 228.692 163.039 228.692 162.444C228.692 161.848 228.59 161.276 228.402 160.744H229.542V164.143ZM217.647 160.744H218.786C218.598 161.276 218.496 161.848 218.496 162.444C218.496 163.039 218.598 163.611 218.786 164.143H217.647L217.647 160.744ZM221.895 161.594V160.744H225.293V161.594H221.895ZM221.045 160.744C221.045 160.275 221.426 159.895 221.895 159.895H225.293C225.763 159.895 226.143 160.275 226.143 160.744V161.594C226.143 162.063 225.763 162.444 225.293 162.444H221.895C221.426 162.444 221.045 162.063 221.045 161.594V160.744ZM221.895 163.293H222.744V164.143H221.895V163.293ZM225.293 163.293H224.444V164.143H225.293V163.293Z"
                  fill="#272F5A"
                  stroke="#272F5A"
                  strokeWidth="1.69931"
                  mask="url(#path-17-inside-3_212_6787)"
                />
              </g>
            </g>
          </g>
        ) : (
          <g
            filter="url(#filter0_dd_22376_18901)"
            transform="translate(200 142) scale(0.8)"
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedBackFlow?.id),
                housingMeteringDeviceType:
                  EHousingMeteringDeviceType.TemperatureSensor,
              });
              openAddCommonDeviceModal();
            }}
          >
            <rect
              className="svgStyle"
              x="16"
              y="8"
              width="33"
              height="33"
              rx="4"
              fill="#189EE9"
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
          <g id="Group 1081" filter="url(#filter3_dd_212_6787)">
            <rect
              id="Rectangle 1345_4"
              x="210.425"
              y="30.1631"
              width="27.189"
              height="27.189"
              rx="2.97379"
              fill="white"
              stroke="#F3F5F6"
              strokeWidth="0.849655"
            />
            <g id="icon16/menu/meter devices_4">
              <g id="Union_4">
                <mask id="path-19-inside-4_212_6787" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M223.594 48.4302C225.94 48.4302 227.842 46.5282 227.842 44.1819C227.842 41.8357 225.94 39.9336 223.594 39.9336C221.248 39.9336 219.346 41.8357 219.346 44.1819C219.346 46.5282 221.248 48.4302 223.594 48.4302ZM223.594 49.2798C225.481 49.2798 227.129 48.2547 228.01 46.7309H229.542H230.391V45.8812V42.4826V41.633H229.542H228.01C227.129 40.1092 225.481 39.084 223.594 39.084C221.707 39.084 220.06 40.1092 219.178 41.633H217.647H216.797V42.4826V45.8812V46.7309H217.647H219.178C220.06 48.2547 221.707 49.2798 223.594 49.2798ZM229.542 45.8812H228.402C228.59 45.3497 228.692 44.7778 228.692 44.1819C228.692 43.5861 228.59 43.0141 228.402 42.4826H229.542V45.8812ZM217.647 42.4826H218.786C218.598 43.0141 218.496 43.5861 218.496 44.1819C218.496 44.7778 218.598 45.3497 218.786 45.8812H217.647L217.647 42.4826ZM221.895 43.3323V42.4826H225.293V43.3323H221.895ZM221.045 42.4826C221.045 42.0134 221.426 41.633 221.895 41.633H225.293C225.763 41.633 226.143 42.0134 226.143 42.4826V43.3323C226.143 43.8015 225.763 44.1819 225.293 44.1819H221.895C221.426 44.1819 221.045 43.8015 221.045 43.3323V42.4826ZM221.895 45.0316H222.744V45.8812H221.895V45.0316ZM225.293 45.0316H224.444V45.8812H225.293V45.0316Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M223.594 48.4302C225.94 48.4302 227.842 46.5282 227.842 44.1819C227.842 41.8357 225.94 39.9336 223.594 39.9336C221.248 39.9336 219.346 41.8357 219.346 44.1819C219.346 46.5282 221.248 48.4302 223.594 48.4302ZM223.594 49.2798C225.481 49.2798 227.129 48.2547 228.01 46.7309H229.542H230.391V45.8812V42.4826V41.633H229.542H228.01C227.129 40.1092 225.481 39.084 223.594 39.084C221.707 39.084 220.06 40.1092 219.178 41.633H217.647H216.797V42.4826V45.8812V46.7309H217.647H219.178C220.06 48.2547 221.707 49.2798 223.594 49.2798ZM229.542 45.8812H228.402C228.59 45.3497 228.692 44.7778 228.692 44.1819C228.692 43.5861 228.59 43.0141 228.402 42.4826H229.542V45.8812ZM217.647 42.4826H218.786C218.598 43.0141 218.496 43.5861 218.496 44.1819C218.496 44.7778 218.598 45.3497 218.786 45.8812H217.647L217.647 42.4826ZM221.895 43.3323V42.4826H225.293V43.3323H221.895ZM221.045 42.4826C221.045 42.0134 221.426 41.633 221.895 41.633H225.293C225.763 41.633 226.143 42.0134 226.143 42.4826V43.3323C226.143 43.8015 225.763 44.1819 225.293 44.1819H221.895C221.426 44.1819 221.045 43.8015 221.045 43.3323V42.4826ZM221.895 45.0316H222.744V45.8812H221.895V45.0316ZM225.293 45.0316H224.444V45.8812H225.293V45.0316Z"
                  fill="#272F5A"
                  stroke="#272F5A"
                  strokeWidth="1.69931"
                  mask="url(#path-19-inside-4_212_6787)"
                />
              </g>
            </g>
          </g>
        ) : (
          <g
            filter="url(#filter0_dd_22376_18901)"
            transform="translate(198 25) scale(0.8)"
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedFlow?.id),
                housingMeteringDeviceType:
                  EHousingMeteringDeviceType.TemperatureSensor,
              });
              openAddCommonDeviceModal();
            }}
          >
            <rect
              className="svgStyle"
              x="16"
              y="8"
              width="33"
              height="33"
              rx="4"
              fill="#189EE9"
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

        {is6 ? (
          <g id="Group 1086" filter="url(#filter4_dd_212_6787)">
            <rect
              id="Rectangle 1345_5"
              x="128.425"
              y="218.425"
              width="27.189"
              height="27.189"
              rx="2.97379"
              fill="white"
              stroke="#F3F5F6"
              strokeWidth="0.849655"
            />
            <g id="icon16/menu/meter devices_5">
              <g id="Union_5">
                <mask id="path-21-inside-5_212_6787" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M141.594 236.692C143.94 236.692 145.842 234.79 145.842 232.444C145.842 230.097 143.94 228.195 141.594 228.195C139.248 228.195 137.346 230.097 137.346 232.444C137.346 234.79 139.248 236.692 141.594 236.692ZM141.594 237.542C143.481 237.542 145.129 236.516 146.01 234.993H147.542H148.391V234.143V230.744V229.895H147.542H146.01C145.129 228.371 143.481 227.346 141.594 227.346C139.707 227.346 138.06 228.371 137.178 229.895H135.647H134.797V230.744V234.143V234.993H135.647H137.178C138.06 236.516 139.707 237.542 141.594 237.542ZM147.542 234.143H146.402C146.59 233.611 146.692 233.039 146.692 232.444C146.692 231.848 146.59 231.276 146.402 230.744H147.542V234.143ZM135.647 230.744H136.786C136.598 231.276 136.496 231.848 136.496 232.444C136.496 233.039 136.598 233.611 136.786 234.143H135.647L135.647 230.744ZM139.895 231.594V230.744H143.293V231.594H139.895ZM139.045 230.744C139.045 230.275 139.426 229.895 139.895 229.895H143.293C143.763 229.895 144.143 230.275 144.143 230.744V231.594C144.143 232.063 143.763 232.444 143.293 232.444H139.895C139.426 232.444 139.045 232.063 139.045 231.594V230.744ZM139.895 233.293H140.744V234.143H139.895V233.293ZM143.293 233.293H142.444V234.143H143.293V233.293Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M141.594 236.692C143.94 236.692 145.842 234.79 145.842 232.444C145.842 230.097 143.94 228.195 141.594 228.195C139.248 228.195 137.346 230.097 137.346 232.444C137.346 234.79 139.248 236.692 141.594 236.692ZM141.594 237.542C143.481 237.542 145.129 236.516 146.01 234.993H147.542H148.391V234.143V230.744V229.895H147.542H146.01C145.129 228.371 143.481 227.346 141.594 227.346C139.707 227.346 138.06 228.371 137.178 229.895H135.647H134.797V230.744V234.143V234.993H135.647H137.178C138.06 236.516 139.707 237.542 141.594 237.542ZM147.542 234.143H146.402C146.59 233.611 146.692 233.039 146.692 232.444C146.692 231.848 146.59 231.276 146.402 230.744H147.542V234.143ZM135.647 230.744H136.786C136.598 231.276 136.496 231.848 136.496 232.444C136.496 233.039 136.598 233.611 136.786 234.143H135.647L135.647 230.744ZM139.895 231.594V230.744H143.293V231.594H139.895ZM139.045 230.744C139.045 230.275 139.426 229.895 139.895 229.895H143.293C143.763 229.895 144.143 230.275 144.143 230.744V231.594C144.143 232.063 143.763 232.444 143.293 232.444H139.895C139.426 232.444 139.045 232.063 139.045 231.594V230.744ZM139.895 233.293H140.744V234.143H139.895V233.293ZM143.293 233.293H142.444V234.143H143.293V233.293Z"
                  fill="#272F5A"
                  stroke="#272F5A"
                  strokeWidth="1.69931"
                  mask="url(#path-21-inside-5_212_6787)"
                />
              </g>
            </g>
          </g>
        ) : (
          <g
            filter="url(#filter0_dd_22376_18901)"
            transform="translate(117 212) scale(0.8)"
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(recharge?.id),
                housingMeteringDeviceType:
                  EHousingMeteringDeviceType.TemperatureSensor,
              });
              openAddCommonDeviceModal();
            }}
          >
            <rect
              className="svgStyle"
              x="16"
              y="8"
              width="33"
              height="33"
              rx="4"
              fill="#189EE9"
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

        {is3 ? (
          <g id="Group 1084" filter="url(#filter5_dd_212_6787)">
            <rect
              id="Rectangle 1345_6"
              x="306.425"
              y="148.425"
              width="27.189"
              height="27.189"
              rx="2.97379"
              fill="white"
              stroke="#F3F5F6"
              strokeWidth="0.849655"
            />
            <g id="icon16/menu/meter devices_6">
              <g id="Union_6">
                <mask id="path-23-inside-6_212_6787" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M319.594 166.692C321.94 166.692 323.842 164.79 323.842 162.444C323.842 160.097 321.94 158.195 319.594 158.195C317.248 158.195 315.346 160.097 315.346 162.444C315.346 164.79 317.248 166.692 319.594 166.692ZM319.594 167.542C321.481 167.542 323.129 166.516 324.01 164.993H325.542H326.391V164.143V160.744V159.895H325.542H324.01C323.129 158.371 321.481 157.346 319.594 157.346C317.707 157.346 316.06 158.371 315.178 159.895H313.647H312.797V160.744V164.143V164.993H313.647H315.178C316.06 166.516 317.707 167.542 319.594 167.542ZM325.542 164.143H324.402C324.59 163.611 324.692 163.039 324.692 162.444C324.692 161.848 324.59 161.276 324.402 160.744H325.542V164.143ZM313.647 160.744H314.786C314.598 161.276 314.496 161.848 314.496 162.444C314.496 163.039 314.598 163.611 314.786 164.143H313.647L313.647 160.744ZM317.895 161.594V160.744H321.293V161.594H317.895ZM317.045 160.744C317.045 160.275 317.426 159.895 317.895 159.895H321.293C321.763 159.895 322.143 160.275 322.143 160.744V161.594C322.143 162.063 321.763 162.444 321.293 162.444H317.895C317.426 162.444 317.045 162.063 317.045 161.594V160.744ZM317.895 163.293H318.744V164.143H317.895V163.293ZM321.293 163.293H320.444V164.143H321.293V163.293Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M319.594 166.692C321.94 166.692 323.842 164.79 323.842 162.444C323.842 160.097 321.94 158.195 319.594 158.195C317.248 158.195 315.346 160.097 315.346 162.444C315.346 164.79 317.248 166.692 319.594 166.692ZM319.594 167.542C321.481 167.542 323.129 166.516 324.01 164.993H325.542H326.391V164.143V160.744V159.895H325.542H324.01C323.129 158.371 321.481 157.346 319.594 157.346C317.707 157.346 316.06 158.371 315.178 159.895H313.647H312.797V160.744V164.143V164.993H313.647H315.178C316.06 166.516 317.707 167.542 319.594 167.542ZM325.542 164.143H324.402C324.59 163.611 324.692 163.039 324.692 162.444C324.692 161.848 324.59 161.276 324.402 160.744H325.542V164.143ZM313.647 160.744H314.786C314.598 161.276 314.496 161.848 314.496 162.444C314.496 163.039 314.598 163.611 314.786 164.143H313.647L313.647 160.744ZM317.895 161.594V160.744H321.293V161.594H317.895ZM317.045 160.744C317.045 160.275 317.426 159.895 317.895 159.895H321.293C321.763 159.895 322.143 160.275 322.143 160.744V161.594C322.143 162.063 321.763 162.444 321.293 162.444H317.895C317.426 162.444 317.045 162.063 317.045 161.594V160.744ZM317.895 163.293H318.744V164.143H317.895V163.293ZM321.293 163.293H320.444V164.143H321.293V163.293Z"
                  fill="#272F5A"
                  stroke="#272F5A"
                  strokeWidth="1.69931"
                  mask="url(#path-23-inside-6_212_6787)"
                />
              </g>
            </g>
          </g>
        ) : (
          <g
            filter="url(#filter0_dd_22376_18901)"
            transform="translate(295 143) scale(0.8)"
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedBackFlow?.id),
                housingMeteringDeviceType: EHousingMeteringDeviceType.FlowMeter,
              });
              openAddCommonDeviceModal();
            }}
          >
            <rect
              className="svgStyle"
              x="16"
              y="8"
              width="33"
              height="33"
              rx="4"
              fill="#189EE9"
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
      </g>

      <defs>
        <filter
          id="filter0_dd_212_6787"
          x="34.0569"
          y="22.941"
          width="55.228"
          height="55.228"
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
            result="effect1_dropShadow_212_6787"
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
            in2="effect1_dropShadow_212_6787"
            result="effect2_dropShadow_212_6787"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_212_6787"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_212_6787"
          x="34.4055"
          y="211.203"
          width="55.228"
          height="55.228"
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
            result="effect1_dropShadow_212_6787"
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
            in2="effect1_dropShadow_212_6787"
            result="effect2_dropShadow_212_6787"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_212_6787"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_dd_212_6787"
          x="196.406"
          y="140.203"
          width="55.228"
          height="55.228"
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
            result="effect1_dropShadow_212_6787"
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
            in2="effect1_dropShadow_212_6787"
            result="effect2_dropShadow_212_6787"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_212_6787"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_dd_212_6787"
          x="196.406"
          y="22.941"
          width="55.228"
          height="55.228"
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
            result="effect1_dropShadow_212_6787"
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
            in2="effect1_dropShadow_212_6787"
            result="effect2_dropShadow_212_6787"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_212_6787"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_dd_212_6787"
          x="114.406"
          y="211.203"
          width="55.228"
          height="55.228"
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
            result="effect1_dropShadow_212_6787"
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
            in2="effect1_dropShadow_212_6787"
            result="effect2_dropShadow_212_6787"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_212_6787"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_dd_212_6787"
          x="292.406"
          y="141.203"
          width="55.228"
          height="55.228"
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
            result="effect1_dropShadow_212_6787"
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
            in2="effect1_dropShadow_212_6787"
            result="effect2_dropShadow_212_6787"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_212_6787"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
