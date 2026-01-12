"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./locale-provider";
import { LanguageSelect } from "./language-select";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Drawer } from "antd";

export function NavBar() {
  const { t, locale } = useLocale();
  const pathname = usePathname() || "";
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  React.useEffect(() => {
    setOpen(false);
  }, []);
  const linkClass = (href: string) => {
    const active = pathname == href;
    return active
      ? "font-medium text-orange-600"
      : "font-medium text-gray-600 dark:text-white";
  };

  const base = `/${locale}`;

  return (
    <>
      <div className="nav border-b dark:border-white border-gray-500 pt-3 p-2 flex items-center justify-between max-w-350 m-auto">
        <img width={48} src="/favicon.ico" alt="logo" />
        <div className="flex navi items-center gap-4">
          <Link className={linkClass(`${base}`)} href={base}>
            {t("nav1")}
          </Link>
          <Link className={linkClass(`${base}/cover`)} href={`${base}/cover`}>
            {t("nav2")}
          </Link>
          <Link className={linkClass(`${base}/info`)} href={`${base}/info`}>
            {t("nav3")}
          </Link>
          <Link
            className={linkClass(`${base}/partners`)}
            href={`${base}/partners`}
          >
            {t("nav4")}
          </Link>
          <Link className={linkClass(`${base}/news`)} href={`${base}/news`}>
            {t("nav5")}
          </Link>
          <Link className={linkClass(`${base}/vacation`)} href={`${base}/vacation`}>
            {t("nav6")}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelect />
          <AnimatedThemeToggler />
          <button onClick={showDrawer} aria-label="menu">
            <img width={30} src="/burger.png" alt="menu" />
          </button>
        </div>
      </div>

      <Drawer
        title=""
        closeIcon={
          <span style={{ color: "var(--foreground)", fontSize: 18 }}>×</span>
        }
        getContainer={false}
        className="bg-white text-black dark:bg-black"
        onClose={onClose}
        open={open}
      >
        <div className="flex  flex-col w-full gap-5 pl-3 pt-5">
          <h1 className="text-yellow-500">
            <Link className="text-xl" href={base}>
              {t("home")}
            </Link>
          </h1>
          <h1>
            <Link
              onClick={() => setOpen(false)}
              className="text-xl"
              href={`${base}/about`}
            >
              {t("nav1")}
            </Link>
          </h1>
          <h1>
            <Link
              onClick={() => setOpen(false)}
              className="text-xl"
              href={`${base}/cart`}
            >
              {t("nav2")}
            </Link>
          </h1>
          <h1>
            <Link
              onClick={() => setOpen(false)}
              className="text-xl"
              href={`${base}/info`}
            >
              {t("nav3")}
            </Link>
          </h1>
          <h1>
            <Link
              onClick={() => setOpen(false)}
              className="text-xl"
              href={`${base}/partners`}
            >
              {t("nav4")}
            </Link>
          </h1>
          <h1>
            <Link
              onClick={() => setOpen(false)}
              className="text-xl"
              href={`${base}/news`}
            >
              {t("nav5")}
            </Link>
          </h1>
          <h1>
            <Link
              onClick={() => setOpen(false)}
              className="text-xl"
              href={`${base}/jobs`}
            >
              {t("nav6")}
            </Link>
          </h1>
        </div>
      </Drawer>
    </>
  );
}
export default NavBar;