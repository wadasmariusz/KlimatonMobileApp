import React from "react";
import { Entypo } from "@expo/vector-icons";

export const getMenuIcon = (Family, name) => (style) => {
  if (!Family || !name) {
    return <Entypo name="dot-single" size={style.size} color={style.color} />;
  }
  return <Family name={name} size={style.size} color={style.color} />;
};