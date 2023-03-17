import type { NextPage } from "next";
import Head from "next/head";
import { BankView } from "../views";

const Bank: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana DApp</title>
        <meta
          name="WsoS 2023 Bank App"
          content="Bank Functionality"
        />
      </Head>
      <BankView />
    </div>
  );
};

export default Bank;
