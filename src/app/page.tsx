import Loading from "@/components/loading";
import Home from "@/views/Home/home";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}
