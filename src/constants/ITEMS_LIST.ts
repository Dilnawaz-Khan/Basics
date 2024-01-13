import { ImageSourcePropType } from "react-native";

import { MODAL_ICONS } from "./MODAL_ICONS";



export interface ListItem {
  id: number;
  icon?: ImageSourcePropType;
  title: string;
  hasSubTitle: boolean;
  subTitle?: string;
  hasRightIcon: boolean;
  rightIcon?: ImageSourcePropType;
}

export const ITEMS_LIST: ListItem[] =[
  {
    id: 0,
    icon: MODAL_ICONS.send,
    title: 'We\'re moving things around!',
    hasSubTitle: true,
    subTitle: 'See where to share and link',
    hasRightIcon: true,
    rightIcon: MODAL_ICONS.close,
  },
  {
    id: 1,
    icon: MODAL_ICONS.star,
    title: 'Add to favourites',
    hasSubTitle: false,
    hasRightIcon: false,
  },
  {
    id: 2,
    icon: MODAL_ICONS.unfollow,
    title: 'Unollow',
    hasSubTitle: false,
    hasRightIcon: false,
  },
  {
    id: 3,
    icon: MODAL_ICONS.info,
    title: 'Why you\'re seeing this post',
    hasSubTitle: false,
    hasRightIcon: false,
  },
  {
    id: 4,
    icon: MODAL_ICONS.eye,
    title: 'Hide',
    hasSubTitle: false,
    hasRightIcon: false,
  },
  {
    id: 5,
    icon: MODAL_ICONS.person,
    title: 'About this account',
    hasSubTitle: false,
    hasRightIcon: false,
  },
  {
    id: 6,
    icon: MODAL_ICONS.report,
    title: 'Report',
    hasSubTitle: false,
    hasRightIcon: false,
  },
];


