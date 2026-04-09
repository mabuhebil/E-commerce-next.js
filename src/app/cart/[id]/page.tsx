"use client";

import { Button } from "-/components/ui/button";
import { useRef } from "react";
import { paymentFun } from "../cart.actions";
import { useParams } from "next/navigation";
import { Label } from "-/components/ui/label";
import { Input } from "-/components/ui/input";

// {
//   "shippingAddress": {
//     "details": "Test address",
//     "phone": "01000000000",
//     "city": "Cairo",
//     "postalCode": "12345"
//   }
// }
export default function PaymentPage() {
  const { id } = useParams();
  const DetailsRev = useRef<HTMLInputElement>(null);
  const PhoneRev = useRef<HTMLInputElement>(null);
  const CityRev = useRef<HTMLInputElement>(null);
  const PostalCodeRev = useRef<HTMLInputElement>(null);

  async function handelPaymentFun() {
    const PaymentObj = {
      shippingAddress: {
        details: DetailsRev.current?.value,
        phone: PhoneRev.current?.value,
        city: CityRev.current?.value,
        postalCode: PostalCodeRev.current?.value,
      },
    };

    await paymentFun(id?.toString() || "", PaymentObj);
  }

  return (
    <div>
      <Label>Details</Label>
      <Input type="text" ref={DetailsRev} />
      <Label>Phone</Label>
      <Input type="text" ref={PhoneRev} />
      <Label>City</Label>
      <Input type="text" ref={CityRev} />
      <Label>Postal Code</Label>
      <Input type="text" ref={PostalCodeRev} />

      <Button onClick={handelPaymentFun}>Pay Now</Button>
    </div>
  );
}
