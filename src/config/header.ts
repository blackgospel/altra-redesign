export const DESKTOP_HEADER_HEIGHT = 74;
export const MOBILE_HEADER_HEIGHT = 62;

export const HEADER_TOP_OFFSET = 24;

export const HEIGHT_CLASSNAME = `clamp(${MOBILE_HEADER_HEIGHT}px, 10vw, ${DESKTOP_HEADER_HEIGHT}px)`

export const heightTopOffsetClassName = (offset = 0) => `clamp(${MOBILE_HEADER_HEIGHT + HEADER_TOP_OFFSET + offset}px, 10vw, ${DESKTOP_HEADER_HEIGHT + HEADER_TOP_OFFSET + offset}px)`
