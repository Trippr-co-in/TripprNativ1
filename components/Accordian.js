import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AccordianItem from './AccordianItem';

const Accordian = () => {
  const items = [
    {
      title: 'How do I make a reservation?',
      description:
        "Making a reservation is easy! Simply visit our website and select your desired destination, travel dates, and accommodation preferences. Follow the prompts to complete the booking process, and you're all set!",
    },
    {
      title: 'Can I make changes to my reservation?',
      description:
        "Making a reservation is easy! Simply visit our website and select your desired destination, travel dates, and accommodation preferences. Follow the prompts to complete the booking process, and you're all set!",
    },
    {
      title: 'What is your Cancellation policy?',
      description:
        "Making a reservation is easy! Simply visit our website and select your desired destination, travel dates, and accommodation preferences. Follow the prompts to complete the booking process, and you're all set!",
    },
    {
      title: 'What if I have a problem during my trip',
      description:
        "Making a reservation is easy! Simply visit our website and select your desired destination, travel dates, and accommodation preferences. Follow the prompts to complete the booking process, and you're all set!",
    },
    {
      title: 'Can I get a refund if I need to cancel my booking?',
      description:
        "Making a reservation is easy! Simply visit our website and select your desired destination, travel dates, and accommodation preferences. Follow the prompts to complete the booking process, and you're all set!",
    },
    {
      title: 'How do I access my booking details?',
      description:
        "Making a reservation is easy! Simply visit our website and select your desired destination, travel dates, and accommodation preferences. Follow the prompts to complete the booking process, and you're all set!",
    },
  ];
  return (
    <View style={{flex:1}}>
      {items.map((item, index)=>{
        return <AccordianItem item={item} key={index}/>
      })}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({});
