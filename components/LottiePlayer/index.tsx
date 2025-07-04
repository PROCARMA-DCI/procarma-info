import type React from "react";
import dynamic from "next/dynamic";

const PlayerWithNoSSR = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full">Loading...</div>
    ),
  }
);

interface LottiePlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  sourceFile: string;
  maxWidth?: string;
  maxHeight?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  sourceFile,
  style,
  className,
  maxWidth = "1000px",
  maxHeight = "1000px",
  ...rest
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className || ""}`}
      {...rest}
    >
      <PlayerWithNoSSR
        autoplay
        loop
        src={sourceFile}
        style={{
          height: "100%",
          width: "100%",
          maxHeight,
          maxWidth,
        }}
      />
    </div>
  );
};

export default LottiePlayer;
