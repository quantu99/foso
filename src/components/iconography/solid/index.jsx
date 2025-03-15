/* eslint-disable react/display-name */
import { memo } from "react";

import CaretDown from "@/assets/icon/solid/caretDown.svg";
import CaretUp from "@/assets/icon/solid/caretUp.svg";
import ArrowRight from "@/assets/icon/solid/arrowRight.svg";
import Glass from "@/assets/icon/solid/glass.svg";
import Star from "@/assets/icon/solid/star.svg";
import Zalo from "@/assets/icon/solid/zalo.svg";
import Facebook from "@/assets/icon/solid/fb.svg";
import Lin from "@/assets/icon/solid/lin.svg";
import X from "@/assets/icon/solid/x.svg";
import Robot from "@/assets/icon/solid/robot.svg";
import Like from "@/assets/icon/solid/like.svg";
import Heart from "@/assets/icon/solid/heart.svg";
import Amazing from "@/assets/icon/solid/amazing.svg";
import Surprise from "@/assets/icon/solid/surprise.svg";
import Bored from "@/assets/icon/solid/bored.svg";
import Angry from "@/assets/icon/solid/angry.svg";
export const CSCaretDownSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <CaretDown className={className} style={style} onClick={onClick} />
  ),
);
export const CSCaretUpSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <CaretUp className={className} style={style} onClick={onClick} />
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
export const CSStarSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Star className={className} style={style} onClick={onClick} />
  ),
);
export const CSFacebookSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Facebook className={className} style={style} onClick={onClick} />
  ),
);

export const CSZaloSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Zalo className={className} style={style} onClick={onClick} />
  ),
);

export const CSLinSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Lin className={className} style={style} onClick={onClick} />
  ),
);

export const CSXSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <X className={className} style={style} onClick={onClick} />
  ),
);

export const CSRobotSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Robot className={className} style={style} onClick={onClick} />
  ),
);

export const CSLikeSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Like className={className} style={style} onClick={onClick} />
  ),
);
export const CSHeartSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Heart className={className} style={style} onClick={onClick} />
  ),
);

export const CSAmazingSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Amazing className={className} style={style} onClick={onClick} />
  ),
);

export const CSSurpriseSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Surprise className={className} style={style} onClick={onClick} />
  ),
);

export const CSBoredSolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Bored className={className} style={style} onClick={onClick} />
  ),
);

export const CSAngrySolid = memo(
  ({ className = "", style = {}, onClick = null }) => (
    <Angry className={className} style={style} onClick={onClick} />
  ),
);
