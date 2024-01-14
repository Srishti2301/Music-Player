import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text, SafeAreaView,  Image } from 'react-native';

import Slider from '@react-native-community/slider';

import Iconicons from 'react-native-vector-icons/Ionicons';

const {width, height } = Dimensions.get ('window');

const MusicPlayer =() => {
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.maincontainer}>
            <View style={styles.artworkWrapper}>
            <Image source={require('../assets/kesariya.png')}
                    style={styles.artworkImg}/>
            </View>
            <View>
                <Text style ={styles.title}>Kesariya</Text>
                <Text style={styles.artist}>Arijit Singh</Text>
            </View>
            <View  >
                <Slider 
                style={styles.progressContainer}
                value={10}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor='#FFD369'
                minimumTrackTintColor='#FFD369'
                maximumTrackTintColor='#FFF'
                onSlidingComplete={()=>{}}
                />

            </View>
            <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLabelTxt}>0:00</Text>
                <Text style={styles.progressLabelTxt}>3:25</Text>

            </View>
            <View style={styles.musicControlls}>
                <TouchableOpacity onPress={()=>{}}>
                    <Iconicons name='play-skip-back-outline' size={35} color='#FFD369' style={{marginTop:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Iconicons name='ios-pause-circle' size={75} color='#FFD369'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Iconicons name='play-skip-forward-outline' size={35} color='#FFD369' style={{marginTop:25}}/>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.bottomContainer}>
        
            <View style={styles.bottonControls}>
                
            <TouchableOpacity>
                    <Iconicons name='heart-outline' size={30} color='#777777'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Iconicons name='repeat' size={30} color='#777777'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Iconicons name='share-outline' size={30} color='#777777'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Iconicons name='ellipsis-horizontal' size={30} color='#777777'/>
                </TouchableOpacity>
            
            

            </View>
        

        </View>
        
        </SafeAreaView>
    );
};

export default MusicPlayer;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#222831',
    },
    maincontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }, 
    artworkWrapper:{
        width:300,
        height:340,
        marginBottom:25,
    },  
    artworkImg:{
        width:'100%',
        height:'100%',
        borderRadius:15,
        },
    title:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'#EEEEEE'
    },
    artist:{
        fontSize:16,
        fontWeight:'200',
        textAlign:'center',
        color:'#EEEEEE'
    },
    progressContainer:{
        width:350,
        height:40,
        marginTop:25,
        flexDirection:'row'
    },
    progressLabelContainer:{
        width:340,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    progressLabelTxt:{
        color:'#fff',
    },
    musicControlls:{
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-between',
        marginTop:15,
    },
    bottomContainer:{
        borderTopColor:'#393E46',
            borderTopWidth:1,
            width: width,
            alignItems:'center',
            paddingVertical: 15,
    },
    bottonControls:{
        flexDirection:'row',
        justifyContent:'space-between', 
        width:'80%',
    } ,    
    
});