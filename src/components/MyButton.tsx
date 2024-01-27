import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants';

const MyButton = ({title, backgroundColor, numberTimesClick}: any) => {
  // const {title} = props;
  return (
    <Pressable style={[styles.btn, {backgroundColor}]}>
      <Text style={styles.btnText}>
        {title} {numberTimesClick}
      </Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '800',
  },
});
