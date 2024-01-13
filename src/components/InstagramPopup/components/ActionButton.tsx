import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../../constants';

interface ActionButtonProps {
  iconPath: ImageSourcePropType;
  title: string;
}

export const ActionButton = ({iconPath, title}: ActionButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Image source={iconPath} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 5,
  },
  actionContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.black,
  },
});
