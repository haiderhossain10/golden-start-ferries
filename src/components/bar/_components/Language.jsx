import { useState } from "react";
import En from "/flugs/en.png";

export default function Language() {
    const [language, setLanguage] = useState({
        name: "EN",
        img: En,
    });

    return (
        <div className="relative">
            <button className="bg-[#D9D9D9] w-[96px] h-[43px] flex flex-col items-center justify-between rounded-b-[14.47px] relative shadow-xl">
                <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="text-theme-secondary text-sm">
                        {language.name}
                    </span>{" "}
                    <img src={language.img} />
                </div>
                <div className="w-full bg-white flex justify-center py-[4px] rounded-b-[14.47px]">
                    <svg
                        width={9}
                        height={6}
                        viewBox="0 0 9 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1L4.4476 5L0.895193 1"
                            stroke="#236D94"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
        </div>
    );
}
