import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Cards from './cards';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#42CDCA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  subtitle: {
    color: 'white'
  }
});

const coffeIcon = require('./Icons/coffee-cup.png');
const sweetIcon = require('./Icons/croissant.png');
const knifeIcon = require('./Icons/talheres.png');
const wineIcon = require('./Icons/wine-glass.png');

const App = () => {
    
  const [cont, setCont] = useState (0)
  const acrescenta = () => {
    setCont(cont + 1)
  }

  const menuInformations = [
    {
      title: 'Coffe',
      subTitle: 'Choose between differente types of coffe',
      icon: coffeIcon,
      color: '#4EA3D2',
      value: 2,
    },
    {
      title: 'Sweet',
      subTitle: 'Choose de best sweet as you can',
      icon: sweetIcon,
      color: '#4B81BC',
      value: 4,
    },
    {
      title: 'Food',
      subTitle: 'Hmm, here you can choose a good food',
      icon: knifeIcon,
      color: '#63539F',
      value: 6,
    },
    {
      title: 'Drink',
      subTitle: 'Lets drink, just choose what you want',
      icon: wineIcon,
      color: '#604272',
      value: 10,
    }
  ];
    
  return(
    <View>
      <View style={styles.header}>
        <Text style={styles.subtitle}>MENU</Text>
        <Text style={styles.subtitle}>CLIQUES: {cont}</Text>
      </View>
      {menuInformations.map((element) => {
        return (
          <Cards
            title={element.title}
            subTitle={element.subTitle}
            icon={element.icon}
            bgColor={element.color}
            somar={acrescenta}
          />
        );
      })}
    
    </View>
  )
};

export default App;