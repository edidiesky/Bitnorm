import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Market from "./_components/Market";
import Platform from "./_components/Platform";
import Support from "./_components/Support";
import Footer from "./_components/Footer";

export default function Community() {
    return (
        <main className="w-full overflow-hidden">
            <Header />
            <Hero
                toptext={"Welcome to"}
                maintext={"BitNorm Community"}
                bottomtext={'is a community that unites people who are passionate about cryptocurrencies and investments in blockchain technologies.'}
                discord={true}
            />
            {/* patfomr */}
            <Platform />
            <Support />
            <Market />
            <Footer />
        </main>
    );
}
