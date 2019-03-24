import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query ProductsData($preferredContentType: ImageContentType) {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          updatedAt
          ...ProductImages
        }
      }
    }
  }
  fragment ProductImages on Product {
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
`;

export default function Products() {
  const { data, loading } = useQuery(PRODUCTS_QUERY, {
    variables: { preferredContentType: "JPG" },
    ssr: false
  });

  if (loading || !data) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      {data.products.edges.map(({ node: product }: any) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <ul className="images">
            {product.images.edges.map(({ node: image }: any, index: number) => (
              <li className="image-item" key={image.id || index}>
                <img src={image.transformedSrc} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
