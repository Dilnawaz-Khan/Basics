import { ImageSourcePropType } from "react-native";

interface Icons {
  save: ImageSourcePropType; 
  qrCode: ImageSourcePropType;
  send: ImageSourcePropType;
  star: ImageSourcePropType;
  unfollow: ImageSourcePropType;
  info: ImageSourcePropType;
  eye: ImageSourcePropType;
  person: ImageSourcePropType;
  report: ImageSourcePropType;
  close: ImageSourcePropType;
}

const ICONS: Icons = {
    save: require('../assets/save.png'),
    qrCode: require('../assets/qr-code.png'),
    send: require('../assets/send.png'),
    star: require('../assets/star.png'),
    unfollow: require('../assets/unfollow.png'),
    info: require('../assets/info.png'),
    eye: require('../assets/eye.png'),
    person: require('../assets/user.png'),
    report: require('../assets/report.png'),
    close: require('../assets/close.png'),
  };


export const MODAL_ICONS = Object.freeze(ICONS);
