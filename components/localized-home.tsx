"use client";
import { useLocale } from "./locale-provider";
import { Carousel } from "antd";
export function LocalizedHome() {
  const { t } = useLocale();
  return (
    <div>
      <div>
        <div className="section pt-3 section-one max-w-350 m-auto ">
          <Carousel
            autoplay
            className="border-2xl rounded-2xl med"
            arrows
            infinite
            dots
            speed={1200}
          >
            <img className="med w-full h-auto object-cover" src={t("img1")} />
            <img className="med w-full h-auto object-cover" src={t("img2")} />
            <img className="med w-full h-auto object-cover" src={t("img3")} />
          </Carousel>
        </div>
        <div className="section pt-4 max-w-350 m-auto">
          <h1 className="text-center text-4xl border-b-2 w-42 m-auto p-2 border-yellow-400">
            {t("nav1")}
          </h1>
          <h1 className="text-center text-2xl w-300 m-auto font-normal">
            {t("about")}
          </h1>
        </div>
        <div className="section pt-4 max-w-350 m-auto">
          <main className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-10">
                <div>
                  <h2 className="text-xl font-semibold text-orange-600 mb-4">
                    {t("valuesTitle")}
                  </h2>
                  <div className="bg-white dark:bg-black dark:text-white rounded-2xl border border-gray-100 p-6 text-gray-800 leading-relaxed">
                    {t("valuesText")}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange-600 mb-4">
                    {t("goalsTitle")}
                  </h2>
                  <div className="bg-white dark:bg-black dark:text-white rounded-2xl border border-gray-100 p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <img src="/image.png" />
                      </div>
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {t("goal1")}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <img src="/image.png" />
                      </div>
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {t("goal2")}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <img src="/image.png" />
                      </div>
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {t("goal3")}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 max-w-xl">{t("companyIntro")}</p>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-6">
                <div className="col-span-2">
                  <div className="aspect-video w-full h-auto rounded-3xl overflow-hidden bg-gray-200">
                    <img
                      className="w-full h-full object-cover"
                      src="/image copy.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="aspect-4/3 w-full h-auto rounded-3xl overflow-hidden bg-gray-200">
                    <img
                      className="w-full h-full object-cover"
                      src="/image copy 2.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="aspect-4/3 w-full h-auto rounded-3xl overflow-hidden bg-gray-200">
                    <img
                      className="w-full h-full object-cover"
                      src="/image copy 3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
