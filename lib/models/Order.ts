export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  status: string;
  total: number;
  shipping: number;
  tax: number;
  discount: number;
  currency: string;
  paymentMethod: string;
  paymentStatus: string;
  shippingMethod: string;
  shippingStatus: string;
  trackingNumber: string;
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
}
export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}
