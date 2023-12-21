import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero
        toptext={"The new standard in decentralized trading platforms"}
        maintext={"We work with crypto, blockchain, web3"}
        bottomtext={
          "Swap all assets in a frictionless and decentralized manner, earn yield on your native coins, and manage your portfolio while having full control of your keys."
        }
      />
    </main>
  );
}
