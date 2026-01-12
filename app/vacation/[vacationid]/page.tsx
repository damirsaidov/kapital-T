'use client'
import { redirect, useParams } from "next/navigation";  
export default function NewsRedirect() {
  const { vacationid } = useParams();
  redirect(`/en/vacation/${vacationid}`);
}
