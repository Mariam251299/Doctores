import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon,Input, Image, Button} from 'react-native-elements';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//library.add(fab)




export default class Formulario1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha:'',
      nombre:'',
      sintoma:'',
    };
  }
  render() {
    const screenOptions = (route, color) => {
      let iconName
      switch (route.name){
        case "fecha":
          iconName="bookmark-add"
          break;
      }
      return(
        <Icon
          type="material-community"
          name={iconName}
          size={22}
          color={color}
        />
      )
    }
    return (
      <View>
        <View>
         <Text style={styles.sectionTitle}> Expediente Médico </Text>
        </View>
        <View style={styles.imagen}>
          <Image style={styles.imagen} source={require('../doctores/android/app/src/Imagenes/udg.jpeg')}/>
        </View>
        <View style = {styles.inputs}>
            <Input
            screenOptions={({ fecha,black }) => screenOptions(route,color)}
            placeholder='Fecha'
            leftIcon={
                <Icon
                name='calendar'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={fecha => this.setState({fecha})}
            />
        </View>
        

        <View style = {styles.inputs}>
            
            <Input
            placeholder='Nombre(s)'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={nombre => this.setState({nombre})}
            />
        </View>
        

        <View style = {styles.inputs}>
            <Input
            placeholder='Sintoma(s)'
            leftIcon={
                <Icon
                name='pencil'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={sintoma => this.setState({sintoma})}
            />
        </View>

        <View style={{marginTop:20, width:100, marginLeft:150}}>
            <Button
            icon={{
                  type:'font-awesome',
                  name:"check-square",
                  size:15,
                  color:"white",
                }
              }
            title=" Insertar"
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    title:{
        fontSize: 30,
        textAlign: 'center',
    },
    inputs:{
      width: 300,
      marginTop: 15,
      marginLeft: 20,
    },
    imagen:{
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    marginTop: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'gray',
      textAlign: 'center',
      marginTop: 20,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
})
/*import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Image,
   TouchableOpacity,
 } from 'react-native';
 import {Input } from 'react-native-elements'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-elements/dist/helpers';
 /*import AppNavigation from './android/app/navigation/AppNavigation';
 import MENU from './menu';
 import AppNavigationCopy from './AppNavigation copy';
 import LoginScreen from './android/app/screens/LoginScreen';
 import LoginScreen2 from './android/app/screens/LoginScreen2';
 import {UsuarioProvider} from './android/app/context/UsuarioContext'; 
 
 const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  };
  
  const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
     <View>
       <View>
         <Text style={styles.sectionTitle}> Expediente Médico </Text>
         <Image style={styles.imagen} source={require('../doctores/android/app/src/Imagenes/udg.jpeg')}/>
       </View>
       <View>
       <Input
             placeholder='Fecha'
             leftIcon={
                 <Icon
                 name='date'
                 size={24}
                 color='black'
                 />
             }
             onChangeText={fecha=> this.setState({fecha})}
             />
       </View>
     </View>
    );
  };
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'gray',
      textAlign: 'center',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    imagen: {
     width: 100,
     height: 100,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
   },
  });
  
  export default App; */