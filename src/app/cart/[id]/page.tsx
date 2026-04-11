"use client";

import { Button } from "-/components/ui/button";
import { useRef } from "react";
import { checkoutOrder, paymentFun } from "../cart.actions";
import { useParams, useRouter } from "next/navigation";
import { Label } from "-/components/ui/label";
import { Input } from "-/components/ui/input";
import { toast } from "sonner";
import { CartContextType, useCart } from "-/app/_context/cartContext";
import { PayType } from "-/api/types";

// {
//   "shippingAddress": {
//     "details": "Test address",
//     "phone": "01000000000",
//     "city": "Cairo",
//     "postalCode": "12345"
//   }
// }
export default function PaymentPage() {
  const { updateNumberCartItems } = useCart() as CartContextType;
  const router = useRouter();
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

    const isPayed = await paymentFun(
      id?.toString() || "",
      PaymentObj as PayType,
    );

    if (isPayed) {
      toast.success("User Pay Successfuly", { position: "top-right" });
      updateNumberCartItems(0);
      router.push("/");
    } else {
      toast.error("User Pay is faild", { position: "top-right" });
    }
  }

  async function handelCheckoutOrder() {
    const PaymentObj = {
      shippingAddress: {
        details: DetailsRev.current?.value,
        phone: PhoneRev.current?.value,
        city: CityRev.current?.value,
      },
    };
    const link = await checkoutOrder(id?.toString() || "", PaymentObj);

    if (link) {
      window.open(link, "_self");
    }
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

      <Button onClick={handelPaymentFun}>Create cash order</Button>
      <Button onClick={handelCheckoutOrder}>Create online order</Button>
    </div>
  );
}
