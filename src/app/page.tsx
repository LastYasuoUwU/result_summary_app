import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./styles.scss";

export default function Home() {
  return (
    <main className="pageContainer">
      <LeftSide />
      <RightSide />
    </main>
  );
}
