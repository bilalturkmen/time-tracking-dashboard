import { useState } from "react";
import { UserInfo, UserActivity, FooterAttribution, fdata } from "./components";

function App() {
  const [period, setPeriod] = useState("daily");

  return (
    <>
      <main className="container">
        <UserInfo setPeriod={setPeriod} period={period} />
        <UserActivity period={period} />
        <FooterAttribution data={fdata.FooterData} />
      </main>
    </>
  );
}

export default App;
