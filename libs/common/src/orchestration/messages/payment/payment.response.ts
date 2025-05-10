export interface PaymentProcessed extends Response {
  paymentId: number;
  customerId: number;
  amount: number;
}

export interface PaymentRefunded extends Response {
  message: string;
}

export type PaymentResponse = PaymentProcessed | PaymentRefunded;
