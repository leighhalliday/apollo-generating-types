import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ProductsData, ProductsDataVariables } from "./generated/ProductsData";
import { ImageContentType } from "./generated/globalTypes";

export const PRODUCTS_QUERY = gql`
  query ProductsData($preferredContentType: ImageContentType) {
    products(first: 10) {
      edges {
        node {
          id
          title
          images(first: 3) {
            edges {
              node {
                id
                transformedSrc(
                  maxWidth: 150
                  maxHeight: 100
                  preferredContentType: $preferredContentType
                )
              }
            }
          }
        }
      }
    }
  }
`;

class ProductsQuery extends Query<ProductsData, ProductsDataVariables> {}

export default function Products() {
  return (
    <ProductsQuery
      query={PRODUCTS_QUERY}
      variables={{ preferredContentType: ImageContentType.JPG }}
    >
      {({ data, loading, error }) => {
        if (error) {
          return <div>Error loading products...</div>;
        }
        if (loading || !data) {
          return <div>Loading products...</div>;
        }

        return (
          <div data-testid="result">
            {data.products.edges.map(({ node: product }) => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <p>ID {product.id}</p>

                <ul className="images">
                  {product.images.edges.map(
                    ({ node: image }, index: number) => (
                      <li className="image-item" key={image.id || index}>
                        <img src={image.transformedSrc} />
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        );
      }}
    </ProductsQuery>
  );
}
