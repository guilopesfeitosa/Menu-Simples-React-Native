import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';


const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: '',
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  subCard: {
    paddingLeft: 30
  },
  title: {
    fontSize: 25,
    fontWeight: 400,
    color: 'white'
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  },
  icon: {
    width: 35,
    height: 35
  }
});
  
const Cards = ({ title, subTitle, icon, bgColor, somar, value}) => {
  
  const cardStyle = { backgroundColor: bgColor }
  
  const contador = () => {
    somar(value);
  }

  return (
    <TouchableOpacity 
      style={[styles.card, cardStyle]}
      onPress={contador}
    >
    <Image style={styles.icon} source={icon} />
    <View style={styles.subCard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default Cards;