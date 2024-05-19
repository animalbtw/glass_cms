import type { Schema, Attribute } from '@strapi/strapi';

export interface TestCityShop extends Schema.Component {
  collectionName: 'components_test_city_shops';
  info: {
    displayName: 'shop';
    description: '';
  };
  attributes: {
    address: Attribute.String;
    map: Attribute.Text;
    employees: Attribute.Text;
    phone: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.city-shop': TestCityShop;
    }
  }
}
