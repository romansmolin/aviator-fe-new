import BestCasinosMonthly from "./blocks/best-casinos-monthly";
import HeroSection from "./blocks/hero-section";


export default function Home() {
    return (
        <>
            <HeroSection />
            <BestCasinosMonthly casinos={[]}/>
        </>
    )
}
