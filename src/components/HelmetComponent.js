import React from "react";
import { Helmet } from "react-helmet";
import { apiUrl } from "../Config/apiUrl";

const HelmetComponent = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <meta property="og:image" content={`${apiUrl}/${data?.image}`} />
        <meta name="keywords" content={data?.tags} />
      </Helmet>
    </div>
  );
};

export default HelmetComponent;
