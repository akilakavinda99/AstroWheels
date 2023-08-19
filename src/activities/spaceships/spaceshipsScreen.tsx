import React, {useRef} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Button, Dimensions, Text, View} from 'react-native';
const SpaceshipsScreen = () => {
  const carouselRef = useRef(null);
  const width = Dimensions.get('window').width;
  const handlePrevSlide = () => {
    if (carouselRef.current) {
      console.log(carouselRef.current.getCurrentIndex());
      carouselRef.current.scrollTo({
        index: 3,
      });
    }
  };

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        index: carouselRef.current.getCurrentIndex() + 1,
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        // mode=''
        ref={carouselRef}
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
      <Button title="Prev" onPress={handlePrevSlide} />
      <Button title="Next" onPress={handleNextSlide} />
    </View>
  );
};

export default SpaceshipsScreen;
