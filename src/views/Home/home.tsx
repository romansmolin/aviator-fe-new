import BestCasinosMonthly from "./blocks/best-casinos-monthly";
import HeroSection from "./blocks/hero-section";
import { getServerQuery } from "@/lib/apollo-client";
import { CASINO_TOP_BY_COUNTRY } from "@/shared/schemas/casinos";

export default async function Home() {
    const variables = {
        country: "Germany",
    }
    const { getTopByCountryName } = await getServerQuery(CASINO_TOP_BY_COUNTRY, variables)

    return (
        <>
            <HeroSection />
            <BestCasinosMonthly casinos={getTopByCountryName.top_list} />
        </>
    )
}
