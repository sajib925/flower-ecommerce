import {store} from "@/redux/store";
import "@/styles/globals.css";
import {Rubik} from "@next/font/google";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

const rubik = Rubik({subsets: ["latin"], variable: ["--font-rubik"]});

export default function App({Component, pageProps}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <main className={rubik.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
