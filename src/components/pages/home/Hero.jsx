import HeroContent from "./_components/HeroContent";

export default function Hero() {
    return (
        <section className="pt-[90px] pb-[58px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-[54px] font-fira font-normal text-white">
                        YOU SEARCHED FOR
                    </h2>
                </div>
                <HeroContent />
            </div>
        </section>
    );
}
