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

interface ItemProps {
  title: string;
  description: string;
}

export const Item = function ({ title, description }: ItemProps) {
  return (
    <a
      className="block rounded-lg py-2 px-3 transition hover:bg-black/5"
      href="#"
    >
      <p className="font-semibold text-black">{title}</p>
      <p className="text-black/50">{description}</p>
    </a>
  );
};

