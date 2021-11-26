import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreviewComponent";
import { selectCollections } from "../../redux/shopReducer/shopSelectors";
import { ShopPageProps } from "./ShopPageInterfaces";

const ShopPage = ({ collections }: ShopPageProps): JSX.Element => (
  <div className="shopPage">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
