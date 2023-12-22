import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Platform from "./_components/Platform";
import Support from "./_components/Support";
import Footer from "./_components/Footer";

export default function Community() {
    return (
        <main className="w-full overflow-hidden">
            <Header />
            <Hero
                toptext={"Welcome to"}
                maintext={"BitNorm Exchange"}
                bottomtext={'the platform that provides you with the tools to trade cryptocurrencies efficiently and profitably.'}
                discord={true}
            />
            {/* patfomr */}
            <Platform />
            <Support />
            <Footer />
        </main>
    );
}
