import { playerSeekMultipleAmount } from "@config";
import { PLAYER_ACTIONS_OVERLAY_EFFECTS } from "@constants";

export const initialPlayerActionsOverlayEffectState = {
  open: false,
  effect: null,
  icon: null,
  color: null,
};

type PlayerOverlayEffect = {
  open: Boolean,
  icon: String,
  color?: String,
  text?: String,
};

const RESET = "RESET";
export const playerActionsOverlayEffectReducer = (
  state,
  action
): PlayerOverlayEffect => {
  if (action === RESET) return { ...state, open: false };

  if (!action) return initialPlayerActionsOverlayEffectState;
  switch (action) {
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.PLAY:
      return {
        ...state,
        open: true,
        icon: "play",
        color: "text-primary",
        // text: "art.actions.play"
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.PAUSE:
      return {
        ...state,
        open: true,
        icon: "pause",
        color: "text-primary",
        // text: "art.actions.pause"
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.VOLUME_UP:
      return {
        ...state,
        open: true,
        icon: "volume",
        color: "text-primary",
        // text: "art.actions.volumeUp",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.VOLUME_DOWN:
      return {
        ...state,
        open: true,
        icon: "volume-decrease",
        color: "text-primary",
        // text: "art.actions.volumeDown",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.MUTE:
      return {
        ...state,
        open: true,
        icon: "volume-off",
        color: "text-disabled",
        // text: "art.actions.mute"
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.UNMUTE:
      return {
        ...state,
        open: true,
        icon: "volume",
        color: "text-primary",
        // text: "art.actions.unmute",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.SEEK_FORWARD:
      return {
        ...state,
        open: true,
        icon: "forward-5x",
        color: "text-primary",
        // text: "art.actions.goForward",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.SEEK_BACKWARD:
      return {
        ...state,
        open: true,
        icon: "backward-5x",
        color: "text-primary",
        // text: "art.actions.goBackward",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.SEEK_FORWARD_MULTIPLE:
      return {
        ...state,
        open: true,
        icon: `forward-${playerSeekMultipleAmount}x`,
        color: "text-primary",
        // text: "art.actions.goForwardDouble",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.SEEK_BACKWARD_MULTIPLE:
      return {
        ...state,
        open: true,
        icon: `backward-${playerSeekMultipleAmount}x`,
        color: "text-primary",
        // text: "art.actions.goBackwardDouble",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.SHUFFLE_ON:
      return {
        ...state,
        open: true,
        icon: "shuffle",
        color: "text-primary",
        // text: "art.actions.shuffleOn",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.SHUFFLE_OFF:
      return {
        ...state,
        open: true,
        icon: "shuffle",
        color: "text-secondary",
        // text: "art.actions.shuffleOff",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.NO_REPEAT:
      return {
        ...state,
        open: true,
        icon: "repeat",
        color: "text-disabled",
        // text: "art.actions.noRepeat",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.REPEAT_TRACK:
      return {
        ...state,
        open: true,
        icon: "repeat-track",
        color: "text-primary",
        // text: "art.actions.repeatTrack",
      };
    case PLAYER_ACTIONS_OVERLAY_EFFECTS.REPEAT_LIST:
      return {
        ...state,
        open: true,
        icon: "repeat",
        color: "text-primary",
        // text: "art.actions.repeatList",
      };
    default:
      throw new Error("Invalid shit");
  }
};
