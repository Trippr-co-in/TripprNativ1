import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import HomestayCard from '../components/HomestayCard';

const windowWidth = Dimensions.get('window').width; // Get the window width

const Homestay = ({navigation}) => {
  const [hsdata, sethsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://trippr-production-64zvm7t2wa-em.a.run.app/api/v1/homeStay/property/all?skip=10&limit=15',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
            },
            body: JSON.stringify({
              // Add any request parameters or data
            }),
          },
        );

        console.log('Response status:', response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        sethsData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/ep_back.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 20, color: '#7F7F73'}}>Homestays</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.right}>
          <Image source={require('../assets/share-icon.png')} />
          <Image source={require('../assets/search-icon.png')} />
        </View> */}
      </View>
      <ScrollView style={styles.homestaycontainer}>
        {hsdata && hsdata.length > 0 ? (
          hsdata.map((item, index) => (
            <HomestayCard key={index} item={item} navigation={navigation} />
          ))
        ) : (
          <View
            style={{
              height: 650,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...rest of the styles...
  homestaycontainer: {},

  navbar: {
    width: '100%',
    // backgroundColor: "aqua",
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  left: {
    flexDirection: 'row',
    width: '40%',
    // backgroundColor:'red',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    width: '20%',
    // backgroundColor:'red',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Homestay;
