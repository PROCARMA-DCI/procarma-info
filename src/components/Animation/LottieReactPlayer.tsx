"use client";

import { Player } from "@lottiefiles/react-lottie-player";

type LottieReactPlayerProps = {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const LottieReactPlayer = ({
  src,
  autoplay = true,
  loop = true,
  className,
  style,
}: LottieReactPlayerProps) => {
  return (
    <Player
      src={src}
      autoplay={autoplay}
      loop={loop}
      className={className}
      style={{ height: "100%", width: "100%" }}
    />
  );
};
