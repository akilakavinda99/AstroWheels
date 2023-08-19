import {
  Text,
  View,
  Image,
  Pressable,
  Alert,
  ToastAndroid,
  ImageBackground,
  Button,
  FlatList,
} from 'react-native';
import './destinationStyle';
import {style, styletwo} from './destinationStyle';
import Back from '../back/backScreen';
import DestinationContent from './destinationContent';
import {useAppContext} from '../../context/AppContext';

export const ExplorationHub = ({navigation}: any) => {
  const {planet} = useAppContext();
  console.log(planet);
  return (
    <View>
      <Text style={styletwo.maintitle}>Specifications</Text>

      <FlatList
        data={planet.places}
        renderItem={details => {
          console.log('dsds', details);
          return (
            <View style={styletwo.topsection} key={details.index}>
              <DestinationContent
                title={details.item.title}
                para={details.item.description}
                image={details.item.image}
              />
            </View>
          );
        }}
      />

      {/* <View style={styletwo.topsectiontwo}>
        <DestinationContent
          title="Curiosity Rover Landing Sit"
          para="Have you ever dreamed of walking in the footsteps of pioneers? You can make that dream a reality by visiting the  iconic landing site of the Curiosity Rover on Mars"
        />
      </View> */}

      <View style={styletwo.bottomsection}>
        <View style={styletwo.subsection}>
          <DestinationContent
            title="Lunar retregeg"
            para="Nisl posuere suspendisse enim vulputate nunc vitae"
          />
        </View>

        <View style={styletwo.subsection}>
          <DestinationContent
            title="Lunar retregeg"
            para="Nisl posuere suspendisse enim vulputate nunc vitae"
          />
        </View>
      </View>
    </View>
  );
};
