import CasinoReview from "@/views/CasinoReview/casino-review";
import Loading from "@/components/loading";
import React, { Suspense } from "react";
import NoDepositBonuses from "@/views/NoDepositBonuses/NoDepositBonuses";



const NoDepositBonusPage: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NoDepositBonuses />
    </Suspense>
  );
};

export default NoDepositBonusPage;
