import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  console.log();
  

  return (
    <div>
      {data?.feed.links.map((link: any) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
