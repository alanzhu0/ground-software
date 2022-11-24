import Nitrouspid from "../images/nitrouspid.png";
import Ethanolpid from "../images/ethanolpid.png";
import Fullpid from "../images/fullpid.png";
import FullWaterpid from "../images/fullwaterpid.svg";

// CONSTANTS
export const VALVE_MAP = {
  1: "OPEN",
  0: "Closed",
};

export const PADDING = {
  NITROUS: {
    IMAGE: {
      SRC: Nitrouspid,
      ALT: "nitrouspid",
    },
    SENSOR: {
      "PT-5": {
        x: 420 / 784,
        y: 22 / 850,
      },
      "PT-6": {
        x: 635 / 784,
        y: 262 / 850,
      },
      "PT-7": {
        x: 101 / 784,
        y: 385 / 850,
      },
      "PT-8": {
        x: 548 / 784,
        y: 757 / 850,
      },
    },
    VALVE: {
      nitrous_pressurization: {
        x: 404 / 784,
        y: 210 / 850,
      },
      nitrous_vent: {
        x: 33 / 784,
        y: 95 / 850,
      },
      nitrous_fill: {
        x: 19 / 784,
        y: 598 / 850,
      },
      nitrous_mpv: {
        x: 317 / 784,
        y: 736 / 850,
      },
    },
  },

  ETHANOL: {
    IMAGE: {
      SRC: Ethanolpid,
      ALT: "ethanolpid",
    },
    SENSOR: {
      "PT-1": {
        x: 885 / 1971,
        y: 224 / 1522,
      },
      "PT-2": {
        x: 779 / 1971,
        y: 331 / 1522,
      },
      "PT-3": {
        x: 166 / 1971,
        y: 991 / 1522,
      },
      "PT-4": {
        x: 714 / 1971,
        y: 1147 / 1522,
      },
    },
    VALVE: {
      ethanol_vent: {
        x: 274 / 1971,
        y: 91 / 1522,
      },
      ethanol_mpv: {
        x: 347 / 1971,
        y: 517 / 1522,
      },
      ethanol_pressurization: {
        x: 52 / 1971,
        y: 1375 / 1522,
      },
    },
  },

  FULL: {
    IMAGE: {
      SRC: Fullpid,
      ALT: "fullpid",
    },
    SENSOR: {
      "PT-1": {
        x: 639 / 3200,
        y: 170 / 1595,
      },
      "PT-2": {
        x: 2412 / 3200,
        y: 460 / 1595,
      },
      "PT-3": {
        x: 2201 / 3200,
        y: 926 / 1595,
      },
      "PT-4": {
        x: 1771 / 3200,
        y: 1427 / 1595,
      },
      "PT-5": {
        x: 1012 / 3200,
        y: 172 / 1595,
      },
      "PT-6": {
        x: 1445 / 3200,
        y: 379 / 1595,
      },
      "PT-7": {
        x: 1041 / 3200,
        y: 852 / 1595,
      },
      "PT-8": {
        x: 1086 / 3200,
        y: 1255 / 1595,
      },
      "PT-9": {
        x: 1613 / 3200,
        y: 1109 / 1595,
      },
      "PT-10": {
        x: 1249 / 3200,
        y: 1110 / 1595,
      },
    },
    VALVE: {
      nitrous_vent: {
        x: 136 / 3200,
        y: 104 / 1595,
      },
      nitrous_pressurization: {
        x: 619 / 3200,
        y: 716 / 1595,
      },
      nitrous_fill: {
        x: 669 / 3200,
        y: 1163 / 1595,
      },
      nitrous_mpv: {
        x: 447 / 3200,
        y: 1385 / 1595,
      },
      ethanol_vent: {
        x: 2187 / 3200,
        y: 133 / 1595,
      },
      ethanol_pressurization: {
        x: 2756 / 3200,
        y: 571 / 1595,
      },
      ethanol_fill: {
        x: 2269 / 3200,
        y: 1478 / 1595,
      },
      ethanol_mpv: {
        x: 1969 / 3200,
        y: 1152 / 1595,
      },
    },
  },

  FULLWATER: {
    IMAGE: {
      SRC: FullWaterpid,
      ALT: "fullwaterpid",
    },
    STYLE: {
      display: "none",
    },
    SENSOR: {
      "PT-1": {
        x: 592 / 1061,
        y: 161 / 812,
        display: "none",
      },
      "PT-2": {
        x: 710 / 1061,
        y: 280 / 812,
        display: "none",
      },
      "PT-3": {
        x: 663 / 1061,
        y: 543 / 812,
        display: "none",
      },
      "PT-4": {
        x: 919 / 1061,
        y: 693 / 812,
        display: "none",
      },
      "PT-5": {
        x: 226 / 1061,
        y: 160 / 812,
        display: "none",
      },
      "PT-6": {
        x: 491 / 1061,
        y: 157 / 812,
        display: "none",
      },
      "PT-7": {
        x: 83 / 1061,
        y: 521 / 812,
        display: "none",
      },
    },
    VALVE: {
      nitrous_vent: {
        x: 10 / 1061,
        y: 153 / 812,
        display: "none",
      },
      nitrous_pressurization: {
        x: 366 / 1061,
        y: 337 / 812,
        display: "none",
      },
      nitrous_mpv: {
        x: 152 / 1061,
        y: 731 / 812,
        display: "none",
      },
      ethanol_vent: {
        x: 984 / 1061,
        y: 193 / 812,
        display: "none",
      },
      ethanol_pressurization: {
        x: 551 / 1061,
        y: 247 / 812,
        display: "none",
      },
      ethanol_mpv: {
        x: 699 / 1061,
        y: 739 / 812,
        display: "none",
      },
    },
  },
};