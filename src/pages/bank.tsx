import type { NextPage } from "next";
import Head from "next/head";
import { BankView } from "../views";

const Bank: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="wsos 23 bank"
          content="Bank Functionality"
        />
      </Head>
      <BankView />
    </div>
  );
};

export default Bank;
