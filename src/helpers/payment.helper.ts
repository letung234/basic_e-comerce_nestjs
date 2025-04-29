import { orderDto } from 'src/order/dto/order.dto';
import Stripe from 'stripe';

export class PaymentService {
  private stripe = new Stripe(process.env.STRIPE_SK, {
    apiVersion: '2022-11-15',
  });

  // Sử dụng token test để tạo PaymentIntent trong môi trường test
  public async createCharge(amount: number): Promise<any> {
    // Dùng một test token ví dụ: 'tok_visa'
    const testToken = 'pm_card_visa'; // Token test của Stripe để kiểm tra trong môi trường thử nghiệm

    // Tạo PaymentIntent với test token
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Đơn vị tiền tệ, có thể thay đổi tùy theo nhu cầu
      payment_method: testToken, // Sử dụng test token thay vì thông tin thẻ thực tế
      description: 'All product in cart checked out.',
      confirm: true, // Xác nhận thanh toán ngay lập tức
    });

    return paymentIntent;
  }
}
