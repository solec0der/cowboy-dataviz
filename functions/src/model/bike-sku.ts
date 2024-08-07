import { BikeSkuFeatures, fromJson as bikeSkuFeaturesFromJson } from './bike-sku-features';

export interface BikeSku {
  market: string;
  grade: string;
  color: string;
  features: BikeSkuFeatures;
  code: string;
  colorHex: string;
}

export const fromJson = (json: any): BikeSku => {
  return {
    market: json.market,
    grade: json.grade,
    color: json.color,
    features: bikeSkuFeaturesFromJson(json.features),
    code: json.code,
    colorHex: json.color_hex,
  };
};
