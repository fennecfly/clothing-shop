import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItemComponent";
import { RootState } from "../../redux/reducerInterfaces";
import { selectCollection } from "../../redux/shopReducer/shopSelectors";
import {
  CollectionPageProps,
  CollectionPageUrlParams,
} from "./CategoryPageInterfaces";
import "./CollectionPageStyles.scss";

const CollectionPage = ({
  collection: { title, items },
}: CollectionPageProps): JSX.Element => (
  <div className="collectionPage">
    <h2 className="title">{title}</h2>

    <div className="items">
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (
  state: RootState,
  routeProps: RouteComponentProps<CollectionPageUrlParams>
) => ({
  collection: selectCollection(routeProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
