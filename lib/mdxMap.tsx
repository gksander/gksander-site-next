import * as React from "react";

const H1: React.FC = (props) => (
  <h1 {...props} className="text-2xl text-pink-300 mb-2" />
);

const P: React.FC = (props) => <p {...props} className="mb-2" />;

export const MdxMap = {
  p: P,
  h1: H1,
};
