/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductImages
// ====================================================

export interface ProductImages_images_edges_node {
  __typename: "Image";
  /**
   * A unique identifier for the image.
   */
  id: string | null;
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: ShopifyURL;
}

export interface ProductImages_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: ProductImages_images_edges_node;
}

export interface ProductImages_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: ProductImages_images_edges[];
}

export interface ProductImages {
  __typename: "Product";
  /**
   * List of images associated with the product.
   */
  images: ProductImages_images;
}
