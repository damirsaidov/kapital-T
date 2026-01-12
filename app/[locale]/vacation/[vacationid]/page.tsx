"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
const VacationId = () => {
  const { vacationid } = useParams();
  const [data, setData] = useState<any>([]);
  async function getData() {
    try {
      let res = await fetch(
        `https://68c81b295d8d9f51473450f6.mockapi.io/damir/data?id=${vacationid}`
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
      <div className="pt-4">
        <h1 className="text-center font-bold text-4xl p-4 border-b border-[#FFA900] w-fit m-auto">
          {data[0]?.title}
        </h1>
        <div className="flex justify-center gap-2">
          <h1 className="px-2 w-[128px]  py-1 bg-black text-white rounded">
            Опыт от 1 года
          </h1>
          <p></p>
          <div className="flex gap-2  rounded-2xl items-center text-gray-500">
            <CiLocationOn />
            <h2>{data[0]?.country}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start gap-8">
      <div className="max-w-125">
        <h1 className="text-xl">
          О компании: Мы — развивающийся производитель туалетного и
          хозяйственного мыла, а также стирального порошка. Наша цель —
          предоставлять клиентам высококачественную продукцию, которая делает их
          жизнь комфортнее и чище. Присоединяйтесь к нашей команде и внесите
          свой вклад в успех компании! Мы ищем энергичного и целеустремленного
          руководителя! Присоединяйтесь к нашей команде и достигайте новых высот
          вместе с нами, если вы обладаете следующими качествами: • Лидерские
          навыки и умение мотивировать команду. • Стратегическое мышление и
          аналитические навыки. • Ответственность и организованность. •
          Способность быстро принимать решения и решать проблемы. • Ориентация
          на результат и клиентский сервис. • Целеустремленность и нацеленность
          на результат. • Готовность работать в условиях высокой конкуренции.
        </h1>
      </div>
      <img className="w-[360px] object-fit" src="/image copy 8.png" alt="" />
      </div>
    </div>
  );
};

export default VacationId;
