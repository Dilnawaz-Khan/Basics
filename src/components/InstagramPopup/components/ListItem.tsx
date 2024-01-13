import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../../constants';

interface ListItemProps {
  icon?: ImageSourcePropType;
  title: string;
  hasSubTitle: boolean;
  subTitle?: string;
  hasRightIcon: boolean;
  rightIcon?: ImageSourcePropType;
}

export const ListItem = ({
  icon,
  title,
  hasSubTitle,
  subTitle,
  hasRightIcon,
  rightIcon,
}: ListItemProps) => {
  const isItemReport = title === 'Report';
  return (
    <View style={styles.container}>
      {icon && (
        <Image
          source={icon}
          style={[styles.leftIcon, isItemReport && styles.redIconColor]}
        />
      )}
      <View style={styles.titleDetailContainer}>
        <View>
          <Text style={[styles.title, isItemReport && styles.redTextColor]}>
            {title}
          </Text>
          {hasSubTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
        {hasRightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '600',
  },
  subTitle: {
    color: COLORS.primary,
    fontSize: 11,
  },
  leftIcon: {
    height: 25,
    width: 25,
  },
  redIconColor: {
    tintColor: COLORS.red,
  },
  redTextColor: {
    color: COLORS.red,
  },
  titleDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  rightIcon: {
    height: 13,
    width: 13,
    tintColor: COLORS.gray,
  },
});
