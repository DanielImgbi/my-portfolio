import { Suspense, lazy } from "react";
import Myloader from "./components/Myloader";

// const Pages = lazy(() => import("./components/Pages"));

function App() {
  return <Suspense fallback={<Myloader />}>{/* <Pages /> */}</Suspense>;
}

export default App;
