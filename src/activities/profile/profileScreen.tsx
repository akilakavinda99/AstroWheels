import React from 'react';
import {View, Text, StatusBar, ImageBackground, Image} from 'react-native';
import theme from '../../theme/theme';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {styles} from './ProfileScreenStyles';
import {useAppContext} from '../../context/AppContext';

const ProfileScreen = () => {
  const {user} = useAppContext();

  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/UserProfileScreen.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.userDetailsSection}>
            <View style={styles.userDetails}>
              <View style={styles.userDetailsSubSection}>
                <View style={styles.userTextDetailsFlex}>
                  <View
                    style={[styles.userInnerTextDetails, {marginBottom:3}]}>
                    <Text style={[styles.textDetails, {flex: 0.5}]}>
                      Your ID
                    </Text>
                    <View style={{flex: 0.5, justifyContent:'center'}}>
                      <Image
                        source={require('../../../assets/images/IdImage.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.userInnerTextDetails}>
                    <View style={{flex: 0.4}}>
                      <Text style={styles.textDetails}>{user?.name}</Text>
                    </View>
                    <View
                      style={{
                        flex: 0.3,
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontFamily: theme.fonts.light,
                          color: theme.colors.secondary.secondary02,
                        }}>
                        {user?.age}
                      </Text>
                      <Text
                        style={{
                          fontFamily: theme.fonts.light,
                          color: theme.colors.gray.gray100,
                        }}>
                        Years old
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0.3,
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontFamily: theme.fonts.light,
                          color: theme.colors.gray.gray100,
                        }}>
                        Born in{' '}
                      </Text>
                      <Text
                        style={{
                          fontFamily: theme.fonts.light,
                          color: theme.colors.secondary.secondary02,
                        }}>
                        Mars{' '}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.userTextDetails}>
                  <View
                    style={{display: 'flex', alignItems: 'center', flex: 0.8}}>
                    <Image
                      source={require('../../../assets/images/userChart.png')}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text style={styles.textDetails}>Wallet</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Text style={[styles.textDetails, {color: '#FFE566'}]}>
                        {user?.balance}
                      </Text>
                      <Image
                        source={require('../../../assets/images/currency.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.userDetailsSubSection}>
                <View style={styles.userTextDetails}>
                  <View style={{display: 'flex', alignItems: 'center'}}>
                    <Image
                      source={require('../../../assets/images/progressCircle.png')}
                    />
                  </View>
                  <View>
                    <Text style={styles.textDetails}>Eligibility Score</Text>
                    <Text
                      style={{
                        fontFamily: theme.fonts.light,
                        color: theme.colors.gray.gray100,
                      }}>
                      Your eligible to travel 80% of planets
                    </Text>
                  </View>
                </View>
                <View style={styles.userTextDetails}>
                  <View style={{flex: 0.25}}>
                    <View
                      style={{
                        flex: 0.5,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text style={styles.progressText}>Oxygen Level</Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.progressText,
                            {color: theme.colors.gray.gray300},
                          ]}>
                          50%
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 0.5, justifyContent: 'center'}}>
                      <Image
                        source={require('../../../assets/images/oxygenProgress.png')}
                      />
                    </View>
                  </View>

                  <View style={{flex: 0.25}}>
                    <View
                      style={{
                        flex: 0.5,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text style={styles.progressText}>
                          Mental Stability
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.progressText,
                            {color: theme.colors.gray.gray300},
                          ]}>
                          55%
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 0.5, justifyContent: 'center'}}>
                      <Image
                        source={require('../../../assets/images/mentalProgress.png')}
                      />
                    </View>
                  </View>

                  <View style={{flex: 0.25}}>
                    <View
                      style={{
                        flex: 0.5,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text style={styles.progressText}>Stamina</Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.progressText,
                            {color: theme.colors.gray.gray300},
                          ]}>
                          80%
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 0.5, justifyContent: 'center'}}>
                      <Image
                        source={require('../../../assets/images/staminaProgress.png')}
                      />
                    </View>
                  </View>

                  <View style={{flex: 0.25}}>
                    <View
                      style={{
                        flex: 0.5,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text style={styles.progressText}>BPM</Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.progressText,
                            {color: theme.colors.gray.gray300},
                          ]}>
                          78%
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 0.5, justifyContent: 'center'}}>
                      <Image
                        source={require('../../../assets/images/bpmProgress.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ProfileScreen;
