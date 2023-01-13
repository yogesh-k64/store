import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import watch from '../media/watch.png';
import {BlueColor} from '../constants';

const Card = (props) => {
    const name = props.item.title
    const price = props.item.price
    const category = props.item.category
    // category




  return (
    <View style={styles.cardContainer}>
      <Image style={{height: 80,width:80}} source={watch} />
      <Text style={styles.watchName}>{name}</Text>
      <Text style={styles.model}>{category}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    marginBottom: 30,
    borderRadius: 20,
    elevation: 3,
    paddingLeft:10,
    paddingRight:10
  },
  cardText: {
    color: '#000',
  },
  watchName: {
    color: '#000',
    marginBottom:5
  },
  model: {
    color: '#868686',
    marginBottom:10

  },
  price: {
    color: BlueColor,
    marginBottom:10

  },
});
