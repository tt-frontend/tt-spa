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
  feedBackFlow: CommunicationPipePayload | undefined;
  openAddCommonDeviceModal: () => void;
};

export const HotWaterSupplyWithBackflowScheme: FC<Props> = ({
  updateCommonDeviceRequestPayload,
  openAddCommonDeviceModal,
  feedFlow,
  feedBackFlow,
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

  const is1 = Boolean(feedFlowdevice);

  const is2 = Boolean(feedTermodevice);

  const is3 = Boolean(backFlowdevice);

  const is4 = Boolean(backTermodevice);

  return (
    <svg
      width="557"
      height="281"
      viewBox="0 0 557 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="364"
        y="47"
        width="181"
        height="6.99999"
        transform="rotate(90 364 47)"
        fill="#DCDEE4"
      />
      <rect
        opacity="0.5"
        x="26.4896"
        y="40.7832"
        width="385.743"
        height="6.79724"
        rx="3.39862"
        fill="#FF8C68"
      />
      <rect
        opacity="0.5"
        x="26.9998"
        y="228"
        width="385"
        height="7"
        rx="3.5"
        fill="#FF8C68"
      />
      <path
        d="M409.684 0.424805H554.125C555.298 0.424805 556.249 1.37576 556.249 2.54883V277.837C556.249 279.01 555.298 279.961 554.125 279.961H409.684C408.511 279.961 407.56 279.01 407.56 277.837V2.54883C407.56 1.37581 408.511 0.424879 409.684 0.424805Z"
        fill="white"
        stroke="#DCDEE4"
        strokeWidth="0.849655"
      />
      <path
        d="M21.6921 45.3316C21.858 45.1657 21.858 44.8968 21.6921 44.7309L18.9885 42.0273C18.8226 41.8614 18.5536 41.8614 18.3877 42.0273C18.2218 42.1932 18.2218 42.4622 18.3877 42.6281L20.7909 45.0312L18.3877 47.4344C18.2218 47.6003 18.2218 47.8693 18.3877 48.0352C18.5536 48.2011 18.8226 48.2011 18.9885 48.0352L21.6921 45.3316ZM1 45.0312V45.4561H21.3917V45.0312V44.6064H1V45.0312Z"
        fill="black"
      />
      <path
        d="M435.474 45.3316C435.64 45.1657 435.64 44.8968 435.474 44.7309L432.771 42.0273C432.605 41.8614 432.336 41.8614 432.17 42.0273C432.004 42.1932 432.004 42.4622 432.17 42.6281L434.573 45.0312L432.17 47.4344C432.004 47.6003 432.004 47.8693 432.17 48.0352C432.336 48.2011 432.605 48.2011 432.771 48.0352L435.474 45.3316ZM414.782 45.0312V45.4561H435.174V45.0312V44.6064H414.782V45.0312Z"
        fill="black"
      />
      <path
        d="M0.699602 232.256C0.533696 232.091 0.533696 231.822 0.699602 231.656L3.40319 228.952C3.56909 228.786 3.83808 228.786 4.00398 228.952C4.16989 229.118 4.16989 229.387 4.00398 229.553L1.6008 231.956L4.00398 234.359C4.16989 234.525 4.16989 234.794 4.00398 234.96C3.83808 235.126 3.56909 235.126 3.40319 234.96L0.699602 232.256ZM21.3917 231.956V232.381H1V231.956V231.531H21.3917V231.956Z"
        fill="black"
      />
      <path
        d="M414.482 232.256C414.316 232.091 414.316 231.822 414.482 231.656L417.185 228.952C417.351 228.786 417.62 228.786 417.786 228.952C417.952 229.118 417.952 229.387 417.786 229.553L415.383 231.956L417.786 234.359C417.952 234.525 417.952 234.794 417.786 234.96C417.62 235.126 417.351 235.126 417.185 234.96L414.482 232.256ZM435.174 231.956V232.381H414.782V231.956V231.531H435.174V231.956Z"
        fill="black"
      />

      {is1 ? (
        <g filter="url(#filter0_dd_225_157)">
          <path
            d="M88.0496 30.1631H109.291C110.933 30.1631 112.265 31.4944 112.265 33.1367V54.3779C112.265 56.0203 110.933 57.3525 109.291 57.3525H88.0496C86.4073 57.3524 85.0759 56.0203 85.0759 54.3779V33.1367C85.076 31.4945 86.4073 30.1632 88.0496 30.1631Z"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="0.849655"
          />
          <mask id="path-10-inside-1_225_157" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M98.2457 48.4302C100.592 48.4302 102.494 46.5282 102.494 44.1819C102.494 41.8357 100.592 39.9336 98.2457 39.9336C95.8995 39.9336 93.9975 41.8357 93.9975 44.1819C93.9975 46.5282 95.8995 48.4302 98.2457 48.4302ZM98.2457 49.2798C100.133 49.2798 101.78 48.2547 102.662 46.7309H104.193H105.043V45.8812V42.4826V41.633H104.193H102.662C101.78 40.1092 100.133 39.084 98.2457 39.084C96.3588 39.084 94.7113 40.1092 93.8298 41.633H92.2981H91.4485V42.4826V45.8812V46.7309H92.2981H93.8298C94.7113 48.2547 96.3588 49.2798 98.2457 49.2798ZM104.193 45.8812H103.054C103.241 45.3497 103.344 44.7778 103.344 44.1819C103.344 43.5861 103.241 43.0141 103.054 42.4826H104.193V45.8812ZM92.2981 42.4826H93.4379C93.25 43.0141 93.1478 43.5861 93.1478 44.1819C93.1478 44.7778 93.25 45.3497 93.4379 45.8812H92.2981L92.2981 42.4826ZM96.5464 43.3323V42.4826H99.945V43.3323H96.5464ZM95.6968 42.4826C95.6968 42.0134 96.0772 41.633 96.5464 41.633H99.945C100.414 41.633 100.795 42.0134 100.795 42.4826V43.3323C100.795 43.8015 100.414 44.1819 99.945 44.1819H96.5464C96.0772 44.1819 95.6968 43.8015 95.6968 43.3323V42.4826ZM96.5464 45.0316H97.3961V45.8812H96.5464V45.0316ZM99.945 45.0316H99.0954V45.8812H99.945V45.0316Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M98.2457 48.4302C100.592 48.4302 102.494 46.5282 102.494 44.1819C102.494 41.8357 100.592 39.9336 98.2457 39.9336C95.8995 39.9336 93.9975 41.8357 93.9975 44.1819C93.9975 46.5282 95.8995 48.4302 98.2457 48.4302ZM98.2457 49.2798C100.133 49.2798 101.78 48.2547 102.662 46.7309H104.193H105.043V45.8812V42.4826V41.633H104.193H102.662C101.78 40.1092 100.133 39.084 98.2457 39.084C96.3588 39.084 94.7113 40.1092 93.8298 41.633H92.2981H91.4485V42.4826V45.8812V46.7309H92.2981H93.8298C94.7113 48.2547 96.3588 49.2798 98.2457 49.2798ZM104.193 45.8812H103.054C103.241 45.3497 103.344 44.7778 103.344 44.1819C103.344 43.5861 103.241 43.0141 103.054 42.4826H104.193V45.8812ZM92.2981 42.4826H93.4379C93.25 43.0141 93.1478 43.5861 93.1478 44.1819C93.1478 44.7778 93.25 45.3497 93.4379 45.8812H92.2981L92.2981 42.4826ZM96.5464 43.3323V42.4826H99.945V43.3323H96.5464ZM95.6968 42.4826C95.6968 42.0134 96.0772 41.633 96.5464 41.633H99.945C100.414 41.633 100.795 42.0134 100.795 42.4826V43.3323C100.795 43.8015 100.414 44.1819 99.945 44.1819H96.5464C96.0772 44.1819 95.6968 43.8015 95.6968 43.3323V42.4826ZM96.5464 45.0316H97.3961V45.8812H96.5464V45.0316ZM99.945 45.0316H99.0954V45.8812H99.945V45.0316Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="1.69931"
            mask="url(#path-10-inside-1_225_157)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(73 25) scale(0.8)"
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

      {is4 ? (
        <g filter="url(#filter1_dd_225_157)">
          <path
            d="M188.398 218.425H209.639C211.282 218.425 212.614 219.756 212.614 221.398V242.64C212.614 244.282 211.282 245.614 209.639 245.614H188.398C186.756 245.614 185.425 244.282 185.425 242.64V221.398C185.425 219.756 186.756 218.425 188.398 218.425Z"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="0.849655"
          />
          <mask id="path-12-inside-2_225_157" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M198.594 236.692C200.941 236.692 202.843 234.79 202.843 232.444C202.843 230.097 200.941 228.195 198.594 228.195C196.248 228.195 194.346 230.097 194.346 232.444C194.346 234.79 196.248 236.692 198.594 236.692ZM198.594 237.542C200.481 237.542 202.129 236.516 203.01 234.993H204.542H205.392V234.143V230.744V229.895H204.542H203.01C202.129 228.371 200.481 227.346 198.594 227.346C196.707 227.346 195.06 228.371 194.178 229.895H192.647H191.797V230.744V234.143V234.993H192.647H194.178C195.06 236.516 196.707 237.542 198.594 237.542ZM204.542 234.143H203.402C203.59 233.611 203.692 233.039 203.692 232.444C203.692 231.848 203.59 231.276 203.402 230.744H204.542V234.143ZM192.647 230.744H193.787C193.599 231.276 193.496 231.848 193.496 232.444C193.496 233.039 193.599 233.611 193.787 234.143H192.647L192.647 230.744ZM196.895 231.594V230.744H200.294V231.594H196.895ZM196.045 230.744C196.045 230.275 196.426 229.895 196.895 229.895H200.294C200.763 229.895 201.143 230.275 201.143 230.744V231.594C201.143 232.063 200.763 232.444 200.294 232.444H196.895C196.426 232.444 196.045 232.063 196.045 231.594V230.744ZM196.895 233.293H197.745V234.143H196.895V233.293ZM200.294 233.293H199.444V234.143H200.294V233.293Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M198.594 236.692C200.941 236.692 202.843 234.79 202.843 232.444C202.843 230.097 200.941 228.195 198.594 228.195C196.248 228.195 194.346 230.097 194.346 232.444C194.346 234.79 196.248 236.692 198.594 236.692ZM198.594 237.542C200.481 237.542 202.129 236.516 203.01 234.993H204.542H205.392V234.143V230.744V229.895H204.542H203.01C202.129 228.371 200.481 227.346 198.594 227.346C196.707 227.346 195.06 228.371 194.178 229.895H192.647H191.797V230.744V234.143V234.993H192.647H194.178C195.06 236.516 196.707 237.542 198.594 237.542ZM204.542 234.143H203.402C203.59 233.611 203.692 233.039 203.692 232.444C203.692 231.848 203.59 231.276 203.402 230.744H204.542V234.143ZM192.647 230.744H193.787C193.599 231.276 193.496 231.848 193.496 232.444C193.496 233.039 193.599 233.611 193.787 234.143H192.647L192.647 230.744ZM196.895 231.594V230.744H200.294V231.594H196.895ZM196.045 230.744C196.045 230.275 196.426 229.895 196.895 229.895H200.294C200.763 229.895 201.143 230.275 201.143 230.744V231.594C201.143 232.063 200.763 232.444 200.294 232.444H196.895C196.426 232.444 196.045 232.063 196.045 231.594V230.744ZM196.895 233.293H197.745V234.143H196.895V233.293ZM200.294 233.293H199.444V234.143H200.294V233.293Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="1.69931"
            mask="url(#path-12-inside-2_225_157)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(173 212) scale(0.8)"
          onClick={() => {
            updateCommonDeviceRequestPayload({
              pipeId: Number(feedBackFlow?.id),
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
        <g filter="url(#filter2_dd_225_157)">
          <rect
            x="185.425"
            y="30.1631"
            width="27.189"
            height="27.189"
            rx="2.97379"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="0.849655"
          />
          <mask id="path-14-inside-3_225_157" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M198.594 48.4302C200.941 48.4302 202.843 46.5282 202.843 44.1819C202.843 41.8357 200.941 39.9336 198.594 39.9336C196.248 39.9336 194.346 41.8357 194.346 44.1819C194.346 46.5282 196.248 48.4302 198.594 48.4302ZM198.594 49.2798C200.481 49.2798 202.129 48.2547 203.01 46.7309H204.542H205.392V45.8812V42.4826V41.633H204.542H203.01C202.129 40.1092 200.481 39.084 198.594 39.084C196.707 39.084 195.06 40.1092 194.178 41.633H192.647H191.797V42.4826V45.8812V46.7309H192.647H194.178C195.06 48.2547 196.707 49.2798 198.594 49.2798ZM204.542 45.8812H203.402C203.59 45.3497 203.692 44.7778 203.692 44.1819C203.692 43.5861 203.59 43.0141 203.402 42.4826H204.542V45.8812ZM192.647 42.4826H193.787C193.599 43.0141 193.496 43.5861 193.496 44.1819C193.496 44.7778 193.599 45.3497 193.787 45.8812H192.647L192.647 42.4826ZM196.895 43.3323V42.4826H200.294V43.3323H196.895ZM196.045 42.4826C196.045 42.0134 196.426 41.633 196.895 41.633H200.294C200.763 41.633 201.143 42.0134 201.143 42.4826V43.3323C201.143 43.8015 200.763 44.1819 200.294 44.1819H196.895C196.426 44.1819 196.045 43.8015 196.045 43.3323V42.4826ZM196.895 45.0316H197.745V45.8812H196.895V45.0316ZM200.294 45.0316H199.444V45.8812H200.294V45.0316Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M198.594 48.4302C200.941 48.4302 202.843 46.5282 202.843 44.1819C202.843 41.8357 200.941 39.9336 198.594 39.9336C196.248 39.9336 194.346 41.8357 194.346 44.1819C194.346 46.5282 196.248 48.4302 198.594 48.4302ZM198.594 49.2798C200.481 49.2798 202.129 48.2547 203.01 46.7309H204.542H205.392V45.8812V42.4826V41.633H204.542H203.01C202.129 40.1092 200.481 39.084 198.594 39.084C196.707 39.084 195.06 40.1092 194.178 41.633H192.647H191.797V42.4826V45.8812V46.7309H192.647H194.178C195.06 48.2547 196.707 49.2798 198.594 49.2798ZM204.542 45.8812H203.402C203.59 45.3497 203.692 44.7778 203.692 44.1819C203.692 43.5861 203.59 43.0141 203.402 42.4826H204.542V45.8812ZM192.647 42.4826H193.787C193.599 43.0141 193.496 43.5861 193.496 44.1819C193.496 44.7778 193.599 45.3497 193.787 45.8812H192.647L192.647 42.4826ZM196.895 43.3323V42.4826H200.294V43.3323H196.895ZM196.045 42.4826C196.045 42.0134 196.426 41.633 196.895 41.633H200.294C200.763 41.633 201.143 42.0134 201.143 42.4826V43.3323C201.143 43.8015 200.763 44.1819 200.294 44.1819H196.895C196.426 44.1819 196.045 43.8015 196.045 43.3323V42.4826ZM196.895 45.0316H197.745V45.8812H196.895V45.0316ZM200.294 45.0316H199.444V45.8812H200.294V45.0316Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="1.69931"
            mask="url(#path-14-inside-3_225_157)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(173 25) scale(0.8)"
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

      {is3 ? (
        <g filter="url(#filter3_dd_225_157)">
          <rect
            x="281.425"
            y="218.425"
            width="27.189"
            height="27.189"
            rx="2.97379"
            fill="white"
            stroke="#F3F5F6"
            strokeWidth="0.849655"
          />
          <mask id="path-16-inside-4_225_157" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M294.594 236.692C296.941 236.692 298.843 234.79 298.843 232.444C298.843 230.097 296.941 228.195 294.594 228.195C292.248 228.195 290.346 230.097 290.346 232.444C290.346 234.79 292.248 236.692 294.594 236.692ZM294.594 237.542C296.481 237.542 298.129 236.516 299.01 234.993H300.542H301.392V234.143V230.744V229.895H300.542H299.01C298.129 228.371 296.481 227.346 294.594 227.346C292.707 227.346 291.06 228.371 290.178 229.895H288.647H287.797V230.744V234.143V234.993H288.647H290.178C291.06 236.516 292.707 237.542 294.594 237.542ZM300.542 234.143H299.402C299.59 233.611 299.692 233.039 299.692 232.444C299.692 231.848 299.59 231.276 299.402 230.744H300.542V234.143ZM288.647 230.744H289.787C289.599 231.276 289.496 231.848 289.496 232.444C289.496 233.039 289.599 233.611 289.787 234.143H288.647L288.647 230.744ZM292.895 231.594V230.744H296.294V231.594H292.895ZM292.045 230.744C292.045 230.275 292.426 229.895 292.895 229.895H296.294C296.763 229.895 297.143 230.275 297.143 230.744V231.594C297.143 232.063 296.763 232.444 296.294 232.444H292.895C292.426 232.444 292.045 232.063 292.045 231.594V230.744ZM292.895 233.293H293.745V234.143H292.895V233.293ZM296.294 233.293H295.444V234.143H296.294V233.293Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M294.594 236.692C296.941 236.692 298.843 234.79 298.843 232.444C298.843 230.097 296.941 228.195 294.594 228.195C292.248 228.195 290.346 230.097 290.346 232.444C290.346 234.79 292.248 236.692 294.594 236.692ZM294.594 237.542C296.481 237.542 298.129 236.516 299.01 234.993H300.542H301.392V234.143V230.744V229.895H300.542H299.01C298.129 228.371 296.481 227.346 294.594 227.346C292.707 227.346 291.06 228.371 290.178 229.895H288.647H287.797V230.744V234.143V234.993H288.647H290.178C291.06 236.516 292.707 237.542 294.594 237.542ZM300.542 234.143H299.402C299.59 233.611 299.692 233.039 299.692 232.444C299.692 231.848 299.59 231.276 299.402 230.744H300.542V234.143ZM288.647 230.744H289.787C289.599 231.276 289.496 231.848 289.496 232.444C289.496 233.039 289.599 233.611 289.787 234.143H288.647L288.647 230.744ZM292.895 231.594V230.744H296.294V231.594H292.895ZM292.045 230.744C292.045 230.275 292.426 229.895 292.895 229.895H296.294C296.763 229.895 297.143 230.275 297.143 230.744V231.594C297.143 232.063 296.763 232.444 296.294 232.444H292.895C292.426 232.444 292.045 232.063 292.045 231.594V230.744ZM292.895 233.293H293.745V234.143H292.895V233.293ZM296.294 233.293H295.444V234.143H296.294V233.293Z"
            fill="#272F5A"
            stroke="#272F5A"
            strokeWidth="1.69931"
            mask="url(#path-16-inside-4_225_157)"
          />
        </g>
      ) : (
        <g
          filter="url(#filter0_dd_22376_18901)"
          transform="translate(270 213) scale(0.8)"
          onClick={() => {
            updateCommonDeviceRequestPayload({
              pipeId: Number(feedBackFlow?.id),
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
          id="filter0_dd_225_157"
          x="71.0566"
          y="22.941"
          width="55.2275"
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
            result="effect1_dropShadow_225_157"
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
            in2="effect1_dropShadow_225_157"
            result="effect2_dropShadow_225_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_225_157"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_225_157"
          x="171.405"
          y="211.203"
          width="55.2276"
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
            result="effect1_dropShadow_225_157"
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
            in2="effect1_dropShadow_225_157"
            result="effect2_dropShadow_225_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_225_157"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_dd_225_157"
          x="171.405"
          y="22.941"
          width="55.2276"
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
            result="effect1_dropShadow_225_157"
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
            in2="effect1_dropShadow_225_157"
            result="effect2_dropShadow_225_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_225_157"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_dd_225_157"
          x="267.405"
          y="211.203"
          width="55.2276"
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
            result="effect1_dropShadow_225_157"
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
            in2="effect1_dropShadow_225_157"
            result="effect2_dropShadow_225_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_225_157"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
