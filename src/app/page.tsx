"use client";
import MilesHistoric from "@/components/MilesHistoric";
import { useState } from "react";

export default function Home() {
  const [tabSelected, setTabSelected] = useState<number>(0);

  function changeTableSelected(tab: number) {
    setTabSelected(tab);
  }

  return (
    <div>
      <div className="tabs flex align-center justify-center p-4 space-x-8">
        <div
          id="tab-0"
          className={`tab m-4 text-2xl ${
            tabSelected === 0 ? "tab-active" : ""
          }`}
          onClick={() => changeTableSelected(0)}
        >
          Historico
        </div>
        <div
          id="tab-1"
          className={`tab m-4 text-2xl ${
            tabSelected === 1 ? "tab-active" : ""
          }`}
          onClick={() => changeTableSelected(1)}
        >
          Tab 1
        </div>
        <div
          id="tab-2"
          className={`tab m-4 text-2xl ${
            tabSelected === 2 ? "tab-active" : ""
          }`}
          onClick={() => changeTableSelected(2)}
        >
          Tab 2
        </div>
      </div>
      <div>{tabSelected === 0 && <MilesHistoric />}</div>
    </div>
  );
}

