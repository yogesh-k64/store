import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Icon, Input, StatusBar} from 'native-base';
import IconF from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import {useEffect, useState} from 'react';
// import IconII from 'react-native-vector-icons/Ionicons';

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('http://fakestoreapi.com/products').then(res =>
        res.json(),
      );
      setList(result);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <IconF size={30} name="menu" color="#000" />
        <Input
          // alignSelf={'stretch'}
          placeholder="Search"
          width="70%"
          //   borderRadius="4"
          variant="rounded"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="#000"
              as={<IconF name="search" />}
            />
          }
        />
      </View>
      <Text style={styles.text}>Order online collect in store</Text>
      <ScrollView style={styles.cardList}>
        {list.length
          ? list.map((item) => {
              return <Card key={item.id} item={item} />;
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    // alignItems: 'center',
    paddingLeft: 50,
    paddingTop: 50,
  },
  searchBar: {
    width: '100%',
    // justifyContent:'space-around',
    gap: 20,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    width: '80%',
    marginBottom: 50,
    marginTop: 50,
  },
  cardList: {
    height: '40%',
  },
});
