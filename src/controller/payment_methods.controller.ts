import { Controller } from '@nestjs/common';
import { PaymentMethodsService } from 'src/service/payment_methods.service';

@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}
}
