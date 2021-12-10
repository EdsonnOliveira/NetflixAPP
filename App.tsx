import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
  Feather,
  MaterialIcons
} from '@expo/vector-icons';

import Logo from './src/assets/logo.png';
import User from './src/assets/user.jpg';
import BgFilm from './src/assets/background.png';

import Film1 from './src/assets/filme1.jpg';
import Film2 from './src/assets/filme2.jpg';
import Film3 from './src/assets/filme3.jpg';

import StyledNav from './src/styles/Navigation';
import StyledHeader from './src/styles/Header';
import StyledBg from './src/styles/Background';
import StyledFilm from './src/styles/Film';

export default function App() {
  const data = [
    {
      id: 1,
      name: 'Bright',
      image: Film1,
    },
    {
      id: 2,
      name: 'Esquadrão 6',
      image: Film2,
    },
    {
      id: 3,
      name: 'Hubie',
      image: Film3,
    },
  ]

  return (
    <>
      <SafeAreaView style={Styles.SafeArea}>
        <ScrollView>
          <View style={StyledHeader.Header}>
            <View style={StyledHeader.Top}>
              <Image style={StyledHeader.Logo} source={Logo} />
              <Image style={StyledHeader.User} source={User} />
            </View>
            <View style={StyledHeader.Bottom}>
              <TouchableOpacity style={StyledHeader.Option} activeOpacity={0.8}>
                <Text style={StyledHeader.TextOption} >Séries</Text>
              </TouchableOpacity>
              <TouchableOpacity style={StyledHeader.Option} activeOpacity={0.8}>
                <Text style={StyledHeader.TextOption} >Filmes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={StyledHeader.Option} activeOpacity={0.8}>
                <Text style={StyledHeader.TextOption} >Categorias</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={StyledBg.Background}>
            <Image style={StyledBg.Image} source={BgFilm} />
            <View style={StyledBg.NSeries}>
              <Image style={StyledBg.Logo} source={Logo} />
              <Text style={StyledBg.TextSeries}>Séries</Text>
            </View>
            <Text style={StyledBg.Title} >O Legado{'\n'}de Júpiter</Text>
            <View style={StyledBg.Genre}>
              <Text style={StyledBg.TextGenre} >Sombrios • Assombroso • Super-herói • Ação</Text>
            </View>
            <View style={StyledBg.Options}>
              <TouchableOpacity style={StyledBg.Option} activeOpacity={0.9}>
                <Ionicons name='add' size={32} color='#FFF' />
                <Text style={StyledBg.TextOption}>Minha lista</Text>
              </TouchableOpacity>
              <TouchableOpacity style={StyledBg.View} activeOpacity={0.9}>
                <Ionicons name='play-sharp' size={28} color='#000' />
                <Text style={StyledBg.TextView}>Assistir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={StyledBg.Option} activeOpacity={0.9}>
                <MaterialIcons name='info-outline' size={26} color='#FFF' />
                <Text style={[StyledBg.TextOption, {marginTop: 3}]}>Saiba mais</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={Styles.Title}>Minha lista</Text>
              <View style={{marginLeft: 10}}>
                <FlatList
                  data={data}
                  horizontal
                  renderItem={
                    ({item}) => (
                      <View style={StyledFilm.Film}>
                        <Image style={StyledFilm.Image} source={item.image} />
                      </View>
                    )
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={StyledNav.Navigation}>
        <TouchableOpacity style={[StyledNav.Option, {opacity: 1}]} activeOpacity={0.9}>
          <Ionicons name='home-outline' size={32} color='#FFF' />
          <Text style={StyledNav.TextOption}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyledNav.Option} activeOpacity={0.9}>
          <MaterialIcons name='video-collection' size={32} color='#FFF' />
          <Text style={StyledNav.TextOption}>Em breve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyledNav.Option} activeOpacity={0.9}>
          <Feather name='search' size={32} color='#FFF' />
          <Text style={StyledNav.TextOption}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyledNav.Option} activeOpacity={0.9}>
          <Feather name='download' size={32} color='#FFF' />
          <Text style={StyledNav.TextOption}>Downloads</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: '#000',
    height: Dimensions.get('window').height - 70
  },
  Title: {
    color: '#FFF',
    fontSize: 22,
    letterSpacing: 2,
    marginLeft: 10,
    opacity: 0.9,
    marginTop: 10,
    marginBottom: 5,
  }
})