export interface ProcessPayment extends Request {
  type: 'Process';
  customerId: number;
  amount: number;
}

export interface RefundPayment extends Request {
  type: 'Refund';
}

export type PaymentRequest = ProcessPayment | RefundPayment;
