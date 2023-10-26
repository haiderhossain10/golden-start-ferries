export default function Hero() {
    return (
        <section className="pt-[90px] pb-[58px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-[54px] font-fira font-normal text-white">
                        YOU SEARCHED FOR
                    </h2>
                </div>
                <div className="lg:w-11/12 mx-auto">
                    <div className="grid grid-cols-1 lg:items-center lg:grid-cols-3 py-[50px] text-center lg:text-start">
                        <ul className="lg:pr-[60px] pb-3 lg-pb-0">
                            <li className="text-[20px] text-white font-normal">
                                Main Departure port:{" "}
                                <span className="font-bold">[RAF] RAFINA</span>
                            </li>
                            <li className="text-[20px] text-white font-normal">
                                Main Destination port:{" "}
                                <span className="font-bold">
                                    [SANT] SANTORINI
                                </span>
                            </li>
                        </ul>
                        <ul className="lg:border-l-[1px] lg:border-r-[1px] border-l-white border-r-white lg:px-[58px] py-3 lg:py-0 border-t-white relative after:content-[''] after:h-[1px] after:w-[63px] after:bg-white after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:lg:hidden before:content-[''] before:h-[1px] before:w-[63px] before:bg-white before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:lg:hidden">
                            <li className="text-[20px] text-white font-normal ">
                                Departure date:{" "}
                                <span className="font-bold">22 MAY 2023</span>
                            </li>
                            <li className="text-[20px] text-white font-normal">
                                Return date:{" "}
                                <span className="font-bold">23 MAY 2023</span>
                            </li>
                        </ul>
                        <ul className="lg:pl-[58px] pt-3 lg:pt-0">
                            <li className="text-[20px] text-white font-normal">
                                Passengers: <span className="font-bold">5</span>
                            </li>
                            <li className="text-[20px] text-white font-normal">
                                Vehicles: <span className="font-bold"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
