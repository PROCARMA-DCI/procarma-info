import React from "react";
import dynamic from "next/dynamic";

const PlayerWithNoSSR = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { 
    ssr: false,
    loading: () => <div>Loading...</div> // Add a loading state
  }
);

interface BoxSize {
  height: string;
  width: string;
  top: string;
  left: string;
  position: string;
}

interface LottiePlayerProps {
  sourceFile: string;
  boxSize: BoxSize;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ sourceFile, boxSize }) => {
  return (
    <PlayerWithNoSSR
      autoplay
      loop
      src={sourceFile}
      style={boxSize}
    />
  );
};

export default LottiePlayer;
