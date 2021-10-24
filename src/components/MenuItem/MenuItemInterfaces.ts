import { RouteComponentProps } from "react-router";
import { Section } from "../Directory/DirectoryInterfaces";

export interface MenuItemProps
  extends RouteComponentProps,
    Omit<Section, "id"> {}
