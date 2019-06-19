import * as easings from "../common/easing";
export default function animation(speed?: number, originValue?: number, changeValue?: number, easing?: typeof easings.linear, animateFunc?: (currentValue: number) => void, delay?: number, loop?: boolean, loopDelay?: number, callback?: () => void): void;
