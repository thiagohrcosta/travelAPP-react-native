import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const Home = () => {

  const image = {
    uri: 
      'https://res.cloudinary.com/dloadb2bx/image/upload/v1627935886/photo-1523906834658-6e24ef2386f9_zl73yk.jpg',
  };

  const [gallery, setGallery] = useState([
    {
      image: {uri:
        'https://res.cloudinary.com/dloadb2bx/image/upload/v1627937853/photo-1523906921802-b5d2d899e93b_cprapg.jpg'
      }, title: 'Venezia'
    },
    {
      image: {uri:
        'https://res.cloudinary.com/dloadb2bx/image/upload/v1627937540/photo-1516483638261-f4dbaf036963_auq2q4.jpg'
      }, title: 'Manarola'
    },
    {
      image: {uri:
        'https://res.cloudinary.com/dloadb2bx/image/upload/v1627937750/photo-1528114039593-4366cc08227d_nqom3t.jpg'
      }, title: 'Firenze'
    },
    {
      image: {uri:
        'https://res.cloudinary.com/dloadb2bx/image/upload/v1627937800/photo-1516108317508-6788f6a160e4_przztg.jpg'
      }, title: 'San Quirico'
    },
    {
      image: {uri:
        'https://res.cloudinary.com/dloadb2bx/image/upload/v1627937924/photo-1563036535-e86d8444e157_ecdzd5.jpg'
      }, title: 'Tuscany'
    },
    {
      image: {uri:
        'https://res.cloudinary.com/dloadb2bx/image/upload/v1627938470/photo-1537799943037-f5da89a65689_xxqi6j.jpg'
      }, title: 'Rome'
    },
    
  ])

  const recentImage = { uri:
    "https://res.cloudinary.com/dloadb2bx/image/upload/v1627943365/photo-1581416271259-abec87515f51_ozvnlr.jpg"

  }

  const goToPost = () => {
    navigation.navigate('Post');
    
  }

  return (
    <View style={{ flexGrow: 1, height: '100%'}}>
      <View>
        <ImageBackground
          source={image}
          style={{width: '100%', height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hi, John Doe,</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder='Search Destionation'
              placeholderTextColor='#666'
            ></TextInput>
            <Feather name='search' size={22} color='#666' style={{
              position: 'absolute',
              top: 30,
              right: 60,
              opacity: 0.6
            }} />
          </View>
          <Feather name='menu' size={22} color='#fff' style={{
              position: 'absolute',
              top: 40,
              left: 16
            }} />
             <Feather name='bell' size={22} color='#fff' style={{
              position: 'absolute',
              top: 40,
              right: 30
            }} />
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Treding</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({item}) => {
              return(
                <View style={{paddingVertical: 20, paddingLeft: 16}}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image 
                      source={item.image} 
                      style={{
                        width: 150,
                        marginRight: 8,
                        height: 250,
                        borderRadius: 10
                      }}/>
                      <View style={styles.ImageOverlay}></View>
                      <Feather name='map-pin' size={16} color='white' style={styles.imageLocationIcon} />
                      <Text style={styles.ImageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
        <View style={{marginBottom: 60}}>
          <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Recently Viewed</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ff6200' }}>View All</Text>
          </View>
        </View>
        <Image 
          source={recentImage}
          style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center' }}
        />
        <View style={{position: 'absolute', bottom: 0, padding: 16}}>
          <View style={{flexDirection: 'row'}} >
            <Feather name='map-pin'
            color='white'
            size={20}
            style={{marginLeft: 10, position: 'relative', top: 4}}
            />
            <Text style={{fontSize: 22, color: 'white', fontWeight: 'normal', marginBottom: 10, marginHorizontal: 10}}>
              Positano
            </Text>
          </View>
          <Text style={{fontSize: 14, color: 'white', fontWeight: 'normal', marginBottom: 4, opacity: 0.9, marginLeft: 16}}>
            Positano is a village and comune on the Amalfi Coast, in Campania, Italy, mainly in an enclave in the hills leading down to the cost.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.2
  },
  imageLocationIcon: {
    position: 'absolute',
    marginTop: 4,
    left: 10,
    bottom: 10
  },
  ImageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10
  }
});

export default Home;
