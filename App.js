import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      
      <View style={styles.bg}>
      <Text style={styles.h1}>Shashwat App</Text>
      <Image
      source={{ uri: 'https://scontent.fbir1-1.fna.fbcdn.net/v/t31.18172-8/22424192_737063726500618_3301418932851484550_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=tVX2Pcmxk-cAX-Hojfk&_nc_ht=scontent.fbir1-1.fna&oh=00_AfBAkARxHrtC_y5CC3gcg9dgI-2y18QwmtYuva5wBPdwMQ&oe=6472DDBA' }}
      style={{ width: 100, height: 100 }} 
    />
      <Text style={{color: "white"}}> Get corner inventions that doesn't exist in the world, get smarter!!</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 0,
    color: "white"
  },
  bg: {
    margin: "3%",
    padding: "3%",
    backgroundColor: "#043b47",
    color: "white"
  }
});
