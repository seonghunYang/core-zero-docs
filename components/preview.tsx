import React from "react";

interface PreviewProps {
  height?: number;
}

export default function Preview(props: React.PropsWithChildren<PreviewProps>) {
  const { height = 300, children } = props;

  return (
    <div
      style={{
        height,
      }}
      className="bg-[#f6f7f8]/50 w-full border rounded-lg flex items-center justify-center"
    >
      {children}
    </div>
  );
}
