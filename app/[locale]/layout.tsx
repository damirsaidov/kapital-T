import Loader from "@/components/loader";
import RouteWrapper from "@/components/route-wrapper";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const p = await params;
  const locale = p.locale === "ru" ? "ru" : "en";
  return (
    <RouteWrapper locale={locale}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </RouteWrapper>
  );
}
