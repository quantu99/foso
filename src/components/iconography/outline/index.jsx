/* eslint-disable react/display-name */
import { memo } from "react";
import Calender from "@/assets/icon/outline/calender.svg";
import Clock from "@/assets/icon/outline/clock.svg";
export const CSCalenderOutline = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Calender className={className} style={style} onClick={onClick} />
  ),
);
export const CSClockOutline = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Clock className={className} style={style} onClick={onClick} />
  ),
);
