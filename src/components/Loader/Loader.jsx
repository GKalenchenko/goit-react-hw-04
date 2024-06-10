import { ProgressBar } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";
export default function Loader() {
  return (
    <div className={css.container}>
      <ProgressBar
        barColor="#318e2a"
        borderColor="#000080"
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
