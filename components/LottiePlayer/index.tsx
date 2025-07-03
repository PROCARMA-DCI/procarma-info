import React from "react";
import dynamic from "next/dynamic";

const PlayerWithNoSSR = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

interface LottiePlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  sourceFile: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  sourceFile,
  style,
  ...rest
}) => {
  return (
    <div {...rest}>
      <PlayerWithNoSSR
        autoplay
        loop
        src={sourceFile}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default LottiePlayer;
