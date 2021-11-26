import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { MyMapStateToProps } from "../../redux/reducerInterfaces";
import { selectCollections } from "../../redux/shopReducer/shopSelectors";
import CollectionPreview from "../CollectionPreview/CollectionPreviewComponent";
import { CollectionsOverviewProps } from "./CollectionsOverviewInterfaces";
import "./CollectionsOverviewStyles.scss";

const CollectionsOverview = ({ collections }: CollectionsOverviewProps) => (
  <div className="collectionOverview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps: MyMapStateToProps<CollectionsOverviewProps> =
  createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionsOverview);
