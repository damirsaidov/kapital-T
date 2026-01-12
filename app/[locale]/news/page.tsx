"use client";
import { useLocale } from "@/components/locale-provider";
export default function NewsPage({ params }: { params: { locale: string } }) {
  const { t } = useLocale();
  return (
    <div className="max-w-375 mx-auto p-6">
      <h2 className="text-4xl text-center m-auto p-2 font-semibold border-b w-32 border-orange-600 mb-4">
        {t("nav5")}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <h1 className="text-2xl">{t("companyIntro")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("newsText")}</p>
        </div>
        <img src="/image copy 6.png" className="w-[651px]" />
      </div>
      <div className="flex flex-wrap pt-2 justify-center max-w-375 m-auto gap-3">
        <div className="flex w-[423px] flex-col border border-gray-300 text-center p-3 rounded-2xl ">
          <img src="/image copy 7.png" className="w-[407px] m-auto" />
          <h1>{t("cardTitle")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("cardDesc")}</p>
          <h2 className="text-yellow-600">{t("readMore")}</h2>
        </div>
        <div className="flex w-[423px] flex-col border border-gray-300 text-center p-3 rounded-2xl ">
          <img src="/image copy 7.png" className="w-[407px] m-auto" />
          <h1>{t("cardTitle")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("cardDesc")}</p>
          <h2 className="text-yellow-600">{t("readMore")}</h2>
        </div>
        <div className="flex w-[423px] flex-col border border-gray-300 text-center p-3 rounded-2xl ">
          <img src="/image copy 7.png" className="w-[407px] m-auto" />
          <h1>{t("cardTitle")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("cardDesc")}</p>
          <h2 className="text-yellow-600">{t("readMore")}</h2>
        </div>
      </div>
      <div className="flex flex-wrap pt-2 justify-center max-w-375 m-auto gap-3">
        <div className="flex w-[423px] flex-col border border-gray-300 text-center p-3 rounded-2xl ">
          <img src="/image copy 7.png" className="w-[407px] m-auto" />
          <h1>{t("cardTitle")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("cardDesc")}</p>
          <h2 className="text-yellow-600">{t("readMore")}</h2>
        </div>
        <div className="flex w-[423px] flex-col border border-gray-300 text-center p-3 rounded-2xl ">
          <img src="/image copy 7.png" className="w-[407px] m-auto" />
          <h1>{t("cardTitle")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("cardDesc")}</p>
          <h2 className="text-yellow-600">{t("readMore")}</h2>
        </div>
        <div className="flex w-[423px] flex-col border border-gray-300 text-center p-3 rounded-2xl ">
          <img src="/image copy 7.png" className="w-[407px] m-auto" />
          <h1>{t("cardTitle")}</h1>
          <p className="text-gray-400 max-w-122 text-[16px]">{t("cardDesc")}</p>
          <h2 className="text-yellow-600">{t("readMore")}</h2>
        </div>
      </div>
    </div>
  );
}
