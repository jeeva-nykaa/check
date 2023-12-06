import { redirect } from 'next/navigation';

export default function PincodeStatus() {
  redirect('/accounts/pincode-status/non-serviceable');
}
