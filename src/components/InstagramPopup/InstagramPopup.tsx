import {Modal, Pressable, StyleSheet, View} from 'react-native';

import {COLORS, ITEMS_LIST, MODAL_ICONS} from '../../constants';
import {ActionButton, ListItem} from './components';

interface InstagramPopupProps {
  visible: boolean;
  handleClose: (value: boolean) => void;
}

const InstagramPopup = ({visible, handleClose}: InstagramPopupProps) => {
  const closeModal = () => handleClose(false);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={closeModal}
      style={styles.modalContainer}>
      <Pressable onPress={closeModal} style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.topBar} />
          <View style={styles.topActionContainer}>
            <ActionButton iconPath={MODAL_ICONS.save} title="SAVED" />
            <ActionButton iconPath={MODAL_ICONS.qrCode} title="QR Code" />
          </View>
          <View style={styles.listItemsContainer}>
            {ITEMS_LIST.map(item => (
              <ListItem key={item.id} {...item} />
            ))}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export {InstagramPopup};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalBody: {
    paddingTop: 10,
    paddingBottom: 20,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingHorizontal: 5,
  },
  topBar: {
    width: 60,
    height: 5,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  topActionContainer: {
    width: '100%',
    paddingHorizontal: 70,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.gray,
  },
  listItemsContainer: {
    width: '100%',
  },
});
