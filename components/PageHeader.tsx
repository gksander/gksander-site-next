import * as React from "react";

type PageHeaderProps = {};

export const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return <div className="font-bold text-2xl text-gray-900">{children}</div>;
};
