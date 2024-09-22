import { getServerQuery } from "@/shared/lib/apollo-client";
import BestCasinosMonthly from "./blocks/best-casinos-monthly";
import HeroSection from "./blocks/hero-section";
import { CASINO_TOP_BY_COUNTRY } from "@/shared/schemas/casinos";
import { GET_BONUSES_BY_TYPE } from "@/shared/schemas/bonuses";
import BestBonusesMonthly from "./blocks/best-bonuses-monthly";

const Home = async () => {

    const { getTopByCountryName } = await getServerQuery(CASINO_TOP_BY_COUNTRY, {
        country: "Germany",
    })

    const { getBonusesByType } = await getServerQuery(GET_BONUSES_BY_TYPE, {
        page: 1,
        number: 9,
        type: "bestOfTheMonth"
    })

    return (
        <>
            <HeroSection />
            <BestCasinosMonthly casinos={getTopByCountryName.top_list} />
            <BestBonusesMonthly bonuses={getBonusesByType.bonuses}/>
        </>
    );
};

export default Home;
