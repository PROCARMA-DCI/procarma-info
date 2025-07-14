import React, { useContext, useEffect, useState } from "react";

import clsx from "clsx";
import { Bars } from "react-loader-spinner";

interface Props {
  className?: string;
  loading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  center?: boolean;
  msg?: string;
}
const SpinnerCenterScreen = ({
  className,
  loading,
  setLoading,
  center,
  msg,
}: Props) => {
  return (
    loading && (
      <div
        className={clsx(
          "select-none fixed inset-0 z-[100] bg-black/50 bg-opacity-20",
          className
        )}
      >
        <div
          className={clsx(
            "flex items-center flex-col justify-center h-full w-full"
          )}
        >
          <Bars
            height="80"
            width="80"
            radius="9"
            color="#0097cc"
            ariaLabel="loading"
          />
        </div>
      </div>
    )
  );
};

export default SpinnerCenterScreen;
