import CasinoReview from "@/views/CasinoReview/casino-review";
import Loading from "@/components/loading";
import React, { Suspense } from "react";

interface CasinoReviewPageProps {
  searchParams: {
    id: string;
  };
}

const CasinoReviewPage: React.FC<CasinoReviewPageProps> = ({
  searchParams,
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <CasinoReview uuid={searchParams.id} />
    </Suspense>
  );
};

export default CasinoReviewPage;
