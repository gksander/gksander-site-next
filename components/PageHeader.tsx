import * as React from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <div className="font-bold text-2xl text-gray-900">{title}</div>
      <div className="text-gray-700">{subtitle}</div>
    </div>
  );
};
