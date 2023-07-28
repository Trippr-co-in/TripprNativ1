import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const HomestayCard = ({item, navigation}) => {
  const images = [item.displayImage, ...item.bestImages].slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <View style={styles.homestaytemplate}>
      <TouchableOpacity onPress={goToPreviousSlide} style={styles.prevBtn}>
        <Image
          source={require('../assets/prev-arrow-icon.png')}
          style={{width: 25, height: 25, resizeMode: 'contain'}}
        />
      </TouchableOpacity>

      <Image
        source={{uri: images[currentIndex]}}
        style={styles.templateImage} // Use a custom style for the image
      />
      <TouchableOpacity onPress={goToNextSlide} style={styles.nextBtn}>
        <Image
          source={require('../assets/nex-arrow-icon.png')}
          style={{width: 25, height: 25, resizeMode: 'contain'}}
        />
      </TouchableOpacity>

      <View style={styles.images_index_block}>
        <View
          style={[
            currentIndex === 0
              ? {backgroundColor: '#0056fb'}
              : {backgroundColor: 'white'},
            styles.images_index,
          ]}></View>
        <View
          style={[
            currentIndex === 1
              ? {backgroundColor: '#0056fb'}
              : {backgroundColor: 'white'},
            styles.images_index,
          ]}></View>
        <View
          style={[
            currentIndex === 2
              ? {backgroundColor: '#0056fb'}
              : {backgroundColor: 'white'},
            styles.images_index,
          ]}></View>
        <View
          style={[
            currentIndex === 3
              ? {backgroundColor: '#0056fb'}
              : {backgroundColor: 'white'},
            styles.images_index,
          ]}></View>
        <View
          style={[
            currentIndex === 4
              ? {backgroundColor: '#0056fb'}
              : {backgroundColor: 'white'},
            styles.images_index,
          ]}></View>
      </View>

      <View style={styles.homestaytext}>
        <View style={styles.propertyname}>
          <Text
            style={styles.templateTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.property_name}
          </Text>
          <Text style={styles.templateSubtitle}>
            {item.city}, {item.state}
          </Text>
        </View>
      </View>
      <View style={styles.ameneties}>
        <View style={styles.amenety}>
          <Image source={require('../assets/cancel.png')} />
          <Text style={{fontFamily: 'Montserrat-Light'}}>
            Free Cancellation
          </Text>
        </View>
        <View style={styles.amenety}>
          <Image source={require('../assets/food.png')} />
          <Text style={{fontFamily: 'Montserrat-Light'}}>
            {!item.free_meals.length
              ? 'Food not included'
              : `${item.free_meals.join(',')} included`}
          </Text>
        </View>
        <View style={styles.amenety}>
          <Image source={require('../assets/wifi.png')} />
          <Text style={{fontFamily: 'Montserrat-Light'}}>Wifi Included</Text>
        </View>
      </View>
      <View style={styles.price_button}>
        <View style={styles.price}>
          <Text style={{fontFamily: 'Montserrat-Bold', color: '#0056FB', fontSize:20}}>
            ₹{item.price_per_night}
          </Text>
          <Text style={{fontFamily: 'Montserrat-Medium'}}>/night</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#0056FB',
            padding: 4,
            borderRadius: 6,
            paddingBottom: 6,
            paddingHorizontal: 12,
          }}
          onPress={() => {
            navigation.navigate('HomestayDetail', {item: item});
          }}>
          <Text style={{fontFamily: 'Oswald-Bold', color: '#fff'}}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomestayCard;

{
  /* <View style={styles.bookbuttoncontainer}>
          <TouchableOpacity
            style={styles.bookbtn}
            onPress={() => {
              navigation.navigate('HomestayDetail', {item: item});
            }}>
            <Text style={{color: 'white', fontSize: 18}}>Book</Text>
          </TouchableOpacity>
        </View> */
}

const styles = StyleSheet.create({
  homestaytemplate: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 16,
    shadowColor: 'black',
    elevation: 8,
    marginHorizontal: 8,
  },
  templateImage: {
    position: 'relative',
    width: '100%',
    height: 200, // Adjust the height as per your requirement
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  templateTitle: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
  },
  templateSubtitle: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  bookbtn: {
    backgroundColor: '#0056FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  homestaytext: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 6,
  },
  propertyname: {
    width: '100%',
  },
  bookbuttoncontainer: {
    flexDirection: 'row',
  },
  prevBtn: {
    position: 'absolute',
    top: '25%',
    left: '5%',
    zIndex: 9,
  },
  nextBtn: {
    position: 'absolute',
    top: '25%',
    right: '5%',
    zIndex: 9,
  },
  images_index_block: {
    flexDirection: 'row',
    gap: 4,
    position: 'absolute',
    top: '45%',
    zIndex: 99,
    left: '45%',
  },
  images_index: {
    zIndex: 99,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  ameneties: {
    marginTop: 12,
    marginLeft: 8,
    gap: 4,
  },
  amenety: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  price_button: {
    marginTop: 12,
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
  },
  price: {
    flexDirection: 'row',
    alignItems:'baseline'
  },
});
