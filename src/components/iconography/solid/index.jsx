/* eslint-disable react/display-name */
import { memo } from "react";

import CaretDown from "@/assets/icon/solid/caretDown.svg";
import ArrowRight from "@/assets/icon/solid/arrowRight.svg";
import Glass from "@/assets/icon/solid/glass.svg";
export const CSCaretDownSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <CaretDown className={className} style={style} onClick={onClick} />
  ),
);
export const CSArrowRightSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <ArrowRight className={className} style={style} onClick={onClick} />
  ),
);
export const CSGlassSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Glass className={className} style={style} onClick={onClick} />
  ),
);
