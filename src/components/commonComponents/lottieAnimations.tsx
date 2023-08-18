import LottieView from 'lottie-react-native';
export default function LottieViewAnimation({source, width, loop}: any) {
  return (
    <>
      <LottieViewAnimation
        source={source}
        autoPlay
        loop={true}
        style={{
          width: width,
        }}
      />
    </>
  );
}
