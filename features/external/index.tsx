import React from "react";
import Layout from "../Core/Layout/index";
import ExternalLinkCard from "../../Components/Card/ExternalLinkCard";

import { EXTERNAL_LINKS } from "../../Data/ExternalLinks";

const External = () => {
  return (
    <Layout>
      {EXTERNAL_LINKS.map((item, index) => (
        <ExternalLinkCard url={item.url}>{item.name}</ExternalLinkCard>
      ))}
    </Layout>
  );
};

export default External;
