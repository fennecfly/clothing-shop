import { RouteComponentProps } from "react-router";
import { Collection } from "../../redux/shopReducer/shopInterfaces";

export interface CollectionPageUrlParams {
  collectionId: string;
}

export interface CollectionPageProps
  extends RouteComponentProps<CollectionPageUrlParams> {
  collection: Collection;
}
