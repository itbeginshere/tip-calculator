import Head from "next/head";
import { useSelector } from "react-redux";
import CalculatedDisplay from "../components/CalculatedDisplay";
import FormInput from "../components/FormInput";
import ResetButton from "../components/ResetButton";
import TipOptions from "../components/TipOptions";
import Title from "../components/Title";
import { RootState } from "../redux/store";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const values = useSelector((state: RootState) => state.calculator);

  return (
    <div>
      <Head>
        <title>SPLI-TTER</title>
        <meta name="description" content="The best tip calculator app" />
        <link rel="icon" href="/img/favicon-32x32.png" />
      </Head>
      <div className={styles.container}>
        <Title />
        <div className={styles.card}>
          <div className={styles.section}>
            <FormInput label="Bill" image="/img/icon-dollar.svg" />
            <TipOptions />
            <FormInput label="Number of people" image="/img/icon-person.svg" />
          </div>
          <div className={styles.section}>
            <div className={styles.totals}>
              <CalculatedDisplay
                title={"Tip Amount"}
                total={values.tipAmount}
              />
              <CalculatedDisplay title={"Total"} total={values.total} />
            </div>
            <div>
              <ResetButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
