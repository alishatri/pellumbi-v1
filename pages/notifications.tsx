import Header from "@/components/Header";
import NotificatonsFeed from "@/components/NotificatonsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const Notifications = () => {
  return (
    <>
          <Header label="Notifications" showBackArrow />
          <NotificatonsFeed/>
    </>
  );
};

export default Notifications;
