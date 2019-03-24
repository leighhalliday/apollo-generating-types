/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ImageContentType } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProductsData
// ====================================================

export interface ProductsData_products_edges_node_images_edges_node {
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

export interface ProductsData_products_edges_node_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: ProductsData_products_edges_node_images_edges_node;
}

export interface ProductsData_products_edges_node_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: ProductsData_products_edges_node_images_edges[];
}

export interface ProductsData_products_edges_node {
  __typename: "Product";
  /**
   * Globally unique identifier.
   */
  id: string;
  /**
   * The product’s title.
   */
  title: string;
  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The date and time when the product was last modified.
   */
  updatedAt: ShopifyDateTime;
  /**
   * List of images associated with the product.
   */
  images: ProductsData_products_edges_node_images;
}

export interface ProductsData_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: ProductsData_products_edges_node;
}

export interface ProductsData_products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: ProductsData_products_edges[];
}

export interface ProductsData {
  /**
   * List of the shop’s products.
   */
  products: ProductsData_products;
}

export interface ProductsDataVariables {
  preferredContentType?: ImageContentType | null;
}
