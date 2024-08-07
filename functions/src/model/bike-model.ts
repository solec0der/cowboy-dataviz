export interface BikeModel {
  name: string;
  description: string;
}

export const fromJson = (json: any): BikeModel => {
  return {
    name: json.name,
    description: json.description,
  };
};
