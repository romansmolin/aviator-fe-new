import CasinoReview from "@/views/CasinoReview/casino-review";
import Loading from "@/components/loading";
import React, { Suspense } from "react";
import NoDepositBonuses from "@/views/NoDepositBonuses/NoDepositBonuses";

interface NoDepositBonusPageProps {
  searchParams: {
    page: string
  }
}

const NoDepositBonusPage: React.FC<NoDepositBonusPageProps> = ({ searchParams }) => {
  
  const page = parseInt(searchParams.page) || 1
  return (
    <Suspense fallback={<Loading />}>
      <NoDepositBonuses page={page}/>
    </Suspense>
  );
};

export default NoDepositBonusPage;
