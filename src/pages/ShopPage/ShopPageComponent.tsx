import React from "react";
import { Route } from "react-router";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionOverviewComponent";
import CollectionPage from "../CollectionPage/CollectionPageComponent";
import { ShopPageProps } from "./ShopPageInterfaces";

const ShopPage = ({ match }: ShopPageProps): JSX.Element => (
  <div className="shopPage">
    <Route
      exact={true}
      path={`${match.path}`}
      component={CollectionsOverview}
    />

    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
