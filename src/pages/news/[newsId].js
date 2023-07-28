import { useRouter } from "next/router";
import React from "react";

const NewsDetailsComponent = () => {
    const router = useRouter();
  return (
    <div>
      <h2>this is newsDetails component for any kind of news: {router.query.newsId}</h2>
    </div>
  );
};

export default NewsDetailsComponent;
