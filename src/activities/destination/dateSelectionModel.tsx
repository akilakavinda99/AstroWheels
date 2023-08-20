import {View, Text, Button} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import DropdownComponent from '../../components/commonComponents/dropDown';

const DateSelectionModel = ({visibility, value, setValue}) => {
  return (
    <Modal isVisible={visibility}>
      <View style={{}}>
        <Text
          style={{
            color: 'white',
          }}>
          Select an available date
        </Text>
        <DropdownComponent value={value} setValue={setValue} />
        <Button title="sd"></Button>
      </View>
    </Modal>
  );
};

export default DateSelectionModel;
