"use client";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function NewsPage({ params }: { params: { locale: string } }) {
  const [data, setData] = useState<any>([]);
  const [counts, setCounts] = useState<any>([])
  async function getData() {
    try {
      let res = await fetch(
        "https://68c81b295d8d9f51473450f6.mockapi.io/damir/data"
      );
      let data = await res.json();
      setData(data);
      setCounts(data)
    } catch (error) {
      console.error(error);
    }
  }
  async function sortData(country: any) {
    try {
      let res = await fetch(
        `https://68c81b295d8d9f51473450f6.mockapi.io/damir/data?country=${country}`
      );
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function searchData(title: any) {
    try {
      let res = await fetch(
        `https://68c81b295d8d9f51473450f6.mockapi.io/damir/data?title=${title}`
      );
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="flex sam pt-6 max-w-300 m-auto gap-6 justify-between">
        <div className="w-86 flex flex-col gap-2">
          <h1 className="text-xl">Регионы</h1>
          <select onChange={(e) => sortData(e.target.value)} className="rounded-md text-gray-600 dark:text-white border px-3 py-2 text-sm">
            {counts.map((e: any) => {
              return (
                <option key={e.id} value={e.country}>
                  {e.country}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-289 flex flex-col gap-2">
          <h1 className="text-2xl p-2">Вакансии</h1>
          <div className="flex w-full items-center gap-2 p-3">
            <input
              type="text"
              onChange={(e) => searchData(e.target.value)}
              placeholder="Search..."
              className="w-[780px] dark:bg-black dark:border dark:border-gray-400 rounded-3xl px-6 py-4 bg-[#F4F4F5] placeholder:text-[#8D8BA7]"
            />
            <button className="px-6 py-4 bg-[#FFA900] rounded-2xl text-white">
              <CiSearch />
            </button>
          </div>
          {Array.isArray(data) && data?.map((e: any) => (
            <div
              className="border border-[#E5E7EB] cartjon rounded w-[880px] h-[244px] px-[28px] py-[24px]"
              key={e.id}
            >
              <h1 className="px-2 w-[128px]  py-1 bg-black text-white rounded">
                Опыт от 1 года
              </h1>
              <div className="w-full flex justify-between">
                <h1 className="py-2 text-xl">{e.title}</h1>
                <div className="flex gap-2 rounded-2xl items-center text-gray-500">
                  <CiLocationOn />
                  <h2>{e.country}</h2>
                </div>
              </div>
              <p className="text-gray-500">{e.description}</p>
              <div className="flex gap-2 pt-4 items-center">
                <button className="px-4 py-3 text-white bg-[#FFA900] rounded-2xl">
                  <Link href={`/vacation/${e.id}`}>Подробнее</Link>
                </button>
                <button className="px-4 py-3 text-[#FFA900] border-[#FFA900] border rounded-2xl">
                  Подать заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}