import Loading from "@/components/loading";
import React, { Suspense } from "react";
import Bonuses from "@/views/Bonuses/bonuses";
interface NoDepositBonusPageProps {
    searchParams: {
        page: string;
    };
    params: {
        type: "no-deposit-bonuses" | "welcome-bonuses"; 
    };
}

const BonusCategoryPage: React.FC<NoDepositBonusPageProps> = ({ searchParams, params }) => {

    const page = parseInt(searchParams.page) || 1

    return (
        <Suspense fallback={<Loading />}>
            <Bonuses page={page} slug={params.type}/>
        </Suspense>
    );
};

export default BonusCategoryPage;
