import Loading from "@/components/loading";
import { getServerQuery } from "@/lib/apollo-client";
import { CASINO_TOP_BY_COUNTRY } from "@/shared/schemas/casinos";
import Home from "@/views/Home/home";
import { Suspense } from "react";

export default async function HomePage() {
	const variables = {
		country: "Germany",
	}

	const { getTopByCountryName } = await getServerQuery(CASINO_TOP_BY_COUNTRY, variables)
	
	return (
		<Suspense fallback={<Loading />}>
			<Home topCasinos={getTopByCountryName} />
		</Suspense>
	)

}
