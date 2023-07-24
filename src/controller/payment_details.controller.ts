import { Controller } from '@nestjs/common';
import { PaymentDetailsService } from 'src/service/payment_details.service';

@Controller('payment-details')
export class PaymentDetailsController {
  constructor(private readonly paymentDetailsService: PaymentDetailsService) {}
}
