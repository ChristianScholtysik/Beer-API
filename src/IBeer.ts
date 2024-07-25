export interface IBeer {
  price: string;
  name: string;
  rating: Rating;
  image: string;
  id: number;
}

export interface Rating {
  average: number;
  reviews: number;
}
