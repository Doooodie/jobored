import { Text } from '@mantine/core';
import type JobsData from 'types/JobsData';

type PaymentTextProps = Pick<JobsData, 'payment_from' | 'payment_to'>;

function PaymentText({ payment_from, payment_to }: PaymentTextProps) {
  let paymentText = `от ${payment_from} до ${payment_to}`;

  if (!payment_from && !payment_to) {
    paymentText = 'указана в';
  } else if (!payment_to) {
    paymentText = `от ${payment_from}`;
  } else if (!payment_from) {
    paymentText = `до ${payment_to}`;
  }

  return <Text component='span'>{paymentText}</Text>;
}

export default PaymentText;
