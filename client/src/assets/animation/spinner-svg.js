import React from 'react';

const spinnerSvg = ({ width, height, viewBox ,props }) => (
    <svg  className="prefix__lds-spinner" width={width} height={height} viewBox={viewBox} preserveAspectRatio="xMidYMid"
    style={{
      background: '0 0',
    }}
    {...props}>
        <rect x={47} y={24} rx={9.4} ry={4.8} width={6} height={12} fill="#edeff1">
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.9166666666666666s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(30 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.8333333333333334s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(60 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.75s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(90 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.6666666666666666s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(120 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5833333333333334s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(150 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(180 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.4166666666666667s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(210 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.3333333333333333s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(240 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.25s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(270 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.16666666666666666s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(300 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.08333333333333333s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={47}
            y={24}
            rx={9.4}
            ry={4.8}
            width={6}
            height={12}
            fill="#edeff1"
            transform="rotate(330 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
            />
        </rect>
    </svg>
)

spinnerSvg.defaultProps = {
    width: "100px",
    height: "100px",
    viewBox: "0 0 100 100"
}

export default spinnerSvg;