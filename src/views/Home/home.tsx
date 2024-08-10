import BestCasinosMonthly from "./blocks/best-casinos-monthly";
import HeroSection from "./blocks/hero-section";

interface HomePageProps {
    topCasinos: any
}

const Home: React.FC<HomePageProps> = ({ topCasinos }) => {
    return (
        <>
            <HeroSection />
            <BestCasinosMonthly casinos={topCasinos.top_list} />
        </>
    );
};

export default Home;
