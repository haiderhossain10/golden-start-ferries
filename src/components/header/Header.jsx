import { Link } from "react-router-dom";
import Logo from "/logo/logo.png";
import Menu from "./_compoents/Menu";

export default function Header() {
    return (
        <>
            <header className="bg-theme-primary">
                <div className="flex items-center justify-between">
                    <div
                        className="bg-white h-[108px] w-[356px]"
                        style={{
                            clipPath:
                                "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)",
                        }}
                    >
                        <Link
                            className="h-full w-full flex items-center pl-3"
                            to="/"
                        >
                            <img src={Logo} />
                        </Link>
                    </div>
                    <Menu />
                    <div className="flex items-center gap-[14px]">
                        <button>
                            <svg
                                width={61}
                                height={63}
                                viewBox="0 0 61 63"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.306042 21.1265C5.94172 24.1517 11.9115 25.7127 18.3269 24.8435C20.7179 24.5567 23.0537 23.9195 25.2591 22.9523C33.2161 19.2956 40.7213 20.4548 48.0066 24.5751C50.0923 25.7789 52.0264 27.228 53.7677 28.8916C53.3934 28.7425 53.0027 28.6261 52.6477 28.4425C44.7696 24.3918 36.6084 24.0999 28.4927 27.4178C20.377 30.7357 12.8738 29.5324 5.6142 25.2997C3.69131 24.1774 1.94112 22.7766 0.104352 21.484L0.306042 21.1265Z"
                                    fill="white"
                                />
                                <path
                                    d="M57.6928 34.9416C55.9988 34.1921 54.5066 33.4678 52.959 32.865C45.7996 30.0708 38.6481 30.3769 31.5902 33.2773C28.2046 34.6708 24.7373 35.6347 21.0693 35.2645C14.4287 34.5792 8.85907 31.567 4.02802 27.0466C4.89986 27.5126 5.77045 27.9832 6.64355 28.4445C13.6028 32.1382 20.8013 32.8089 28.0869 29.5557C38.4117 24.9586 51.795 28.4811 57.6928 34.9416Z"
                                    fill="white"
                                />
                                <path
                                    d="M60.4178 41.8181C58.7238 41.0686 57.2316 40.3443 55.684 39.7415C48.5246 36.9473 41.3732 37.2533 34.3152 40.1537C30.9297 41.5473 27.4623 42.5112 23.7943 42.1409C17.1538 41.4557 11.5841 38.4435 6.75305 33.9231C7.6249 34.3891 8.49548 34.8597 9.36859 35.321C16.3278 39.0147 23.5263 39.6854 30.812 36.4322C41.1368 31.8351 54.5201 35.3576 60.4178 41.8181Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="text-white">Menu</span>
                        </button>
                        <button className="w-[96px] bg-[#1114154d] py-[30px] font-light text-white">
                            WEB <br />
                            CHECK-IN
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
