import {View, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import {useAppContext} from '../../context/AppContext';
import Back from '../back/backScreen';
import {useEffect, useState} from 'react';

const WebComponent = () => {
  const {spaceShip} = useAppContext();

  const {width, height} = Dimensions.get('window');
  const [screenWidth, setScreenWidth] = useState(width);
  const [screenHeight, setScreenHeight] = useState(height);
  useEffect(() => {
    const updateScreenDimensions = () => {
      const newWidth = Dimensions.get('window').width;
      const newHeight = Dimensions.get('window').height;
      setScreenWidth(newWidth);
      setScreenHeight(newHeight);
    };

    Dimensions.addEventListener('change', updateScreenDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateScreenDimensions);
    };
  }, []);
  const iframeHtml = `
    <html>
      <head>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe src="${spaceShip.iframe}"></iframe>
      </body>
    </html>
  `;
  return (
    <View style={{width: screenWidth, height: screenHeight, flex: 1}}>
      <Back title="AR" marginBottom={2} marginTop={8} />
      <WebView
        source={{
          html: iframeHtml,
        }}
      />
    </View>
  );
};

export default WebComponent;
