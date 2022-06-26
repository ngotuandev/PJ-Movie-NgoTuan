import React from "react";
import HeaderTemplate from "../../components/HeaderTemplate/HeaderTemplate";

export function LayoutTheme({ Component }) {
  return (
    <div>
      <HeaderTemplate />
      <Component />
    </div>
  );
}
