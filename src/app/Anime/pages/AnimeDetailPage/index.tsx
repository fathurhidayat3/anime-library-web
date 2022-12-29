import * as React from "react";

import Navbar from "../../../Common/components/Navbar";
import MainLayout from "../components/MainLayout";

export default function AnimeDetailPage(): React.ReactElement {
  return (
    <MainLayout>
      <>
        <Navbar />
        Anime Detail Page
      </>
    </MainLayout>
  );
}
