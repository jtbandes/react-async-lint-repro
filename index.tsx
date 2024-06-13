import * as React from "react";

// Next contains a <reference types="react/experimental" />, so including it triggers this issue
// even if the user's project doesn't intend to use react/experimental.
import {} from "next";

void class Wrapper extends React.Component<React.PropsWithChildren> {
  override render() {
    return this.props.children;
  }
}
