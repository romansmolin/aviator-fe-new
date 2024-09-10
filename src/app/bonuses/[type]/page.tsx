import Loading from "@/components/loading";
import React, { Suspense } from "react";
import NoDepositBonuses from "@/views/NoDepositBonuses/NoDepositBonuses";

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

    const bonusComponents: Record<string, React.ReactNode> = {
        "no-deposit-bonuses": <NoDepositBonuses page={page} slug={params.type}/>,
    };

    const content = bonusComponents[params.type]

    return (
        <Suspense fallback={<Loading />}>
            {content}
        </Suspense>
    );
};

export default BonusCategoryPage;
