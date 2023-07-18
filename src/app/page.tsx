import React from "react";

import { Banner } from "../templates/Banner";
import Diagnosis from "../templates/Diagnosis";
import { Hero } from "../templates/Hero";
import { VerticalFeatures } from "../templates/VerticalFeatures";

export default function Home() {
  return (
    <main>
      <Hero />
      <VerticalFeatures />
      {/* <Diagnosis /> */}
      <Banner />
    </main>
  );
}
