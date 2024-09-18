import {View, Text,ScrollView} from 'react-native'
import React from 'react'

function MidScroll() {
    
    const images = [
    require('./assets/image1.jpg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),
    require('./assets/image4.jpg'),
    require('./assets/image5.jpg'),
    ];

    const containerStyle = {
    overflowX: 'auto', // Enables horizontal scrolling
    whiteSpace: 'nowrap', // Prevents line breaks
    padding: '10px',
    };

    const galleryStyle = {
    display: 'inline-flex', // Align images horizontally
    };

    const imageStyle = {
    width: '200px', // Adjust size as needed
    height: 'auto', // Maintain aspect ratio
    marginRight: '10px', // Space between images
    objectFit: 'cover', // Cover the image space
    };

    return (
        <View>
            <View style = {{
                    backgroundColor: 'darkred',
                    padding:10,
                    borderBottomEndRadius: 15,
                    borderBottomStartRadius:15,
                    alignItems: 'center'
                    }}>
                    <Text style={{
                    color: 'white',
                    fontSize:25
                    }}>Marvel Wallpapers</Text>
                    </View>
                    <ScrollView snapToInterval = {screenwidth} decelerationRate = 'fast' alwaysBounceHorizontal = {true} horizontal>
                    {images.map((source) => (
                    <View key= {source} style = {{
                        alignitems: 'center',
                        width: screenwidth,
                    }}>
                        <Image source = {source}>
                            style = {{
                                width: screenwidth -50,
                                height: screenwidth -50,
                                resizeMode: 'contain'
                            }}
                        </Image>
                        </View>
                    ))}  
                    </ScrollView>
        </View>
    );

}
export default MidScroll