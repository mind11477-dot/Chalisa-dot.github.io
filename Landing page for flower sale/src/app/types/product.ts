export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'bouquet' | 'birthday' | 'congratulations' | 'special';
  meaning?: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  customMessage?: string;
}
