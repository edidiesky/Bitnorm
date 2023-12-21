import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Market from "./_components/Market";
import Platform from "./_components/Platform";
import Chart from "./_components/Chart";
import Support from "./_components/Support";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero
        toptext={"The new standard in decentralized trading platforms"}
        maintext={"We work with crypto, blockchain, web3"}
        bottomtext={
          "Swap all assets in a frictionless and decentralized manner, earn yield on your native coins, and manage your portfolio while having full control of your keys."
        }
      />
      <Chart />
      {/* patfomr */}
      <Platform />
      <Support />
      {/* Market */}
      <Market />
      <Newsletter />
      {/* footer */}
      <Footer />
    </main>
  );
}
