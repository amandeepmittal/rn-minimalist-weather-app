import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class App extends React.Component {
  state = {
    isLoading: true,
    animation: null
  };

  componentWillMount() {
    this._playAnimation();
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    let result = await fetch(
      'https://www.lottiefiles.com/storage/datafiles/a795e9d1bd5672fd901329d51661db5c/JSON/location.json'
    );

    this.setState(
      { animation: JSON.parse(result._bodyText) },
      this._playAnimation
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.animationContainer}>
            {this.state.animation && (
              <Lottie
                ref={animation => {
                  this.animation = animation;
                }}
                style={styles.loadingAnimation}
                source={this.state.animation}
              />
            )}
          </View>
        ) : (
          <View>
            <Text>Minimalist Weather App</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  loadingAnimation: {
    width: 400,
    height: 400,
    backgroundColor: 'transparent'
  }
});
