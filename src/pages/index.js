import React from "react";

import Layout from "../components/layout";
import FeaturesSection from "../components/features";
import CTASection from "../components/footer";

import SEO from "../components/seo";

function IndexPage() {
  return (
    <>
    <Layout>
    
      <SEO
        title="BuildNext"
        keywords={[`Software Development`, `Software Solutions`, `Coding`, `Development studio`]}
      />

    </Layout>
    <FeaturesSection/>
    <CTASection/>
    </>
  );
}

export default IndexPage;
