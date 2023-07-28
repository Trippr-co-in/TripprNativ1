import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const AccordianItem = ({item}) => {
  const [show, setShow] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setShow(!show)}
      style={[
        !show ? {borderRadius: 24} : {borderRadius: 12},
        styles.container,
      ]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text
        style={
          show
            ? {
                display: 'flex',
                fontFamily: 'Montserrat-Medium',
                borderColor: '#999999',

                borderTopWidth: 1,
              }
            : {
                display: 'none',
                fontFamily: 'Montserrat-Medium',
                borderColor: '#999999',

                borderTopWidth: 1,
              }
        }>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

export default AccordianItem;

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(166, 166, 166, 0.68)',
    borderWidth: 1,

    marginBottom: 8,
    padding: 8,
    elevation: 3,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingVertical:4
  },
});
