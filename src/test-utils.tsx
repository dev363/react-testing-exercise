import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
// import { ThemeProvider } from "my-ui-lib";
// import { TranslationProvider } from "my-i18n-lib";
// import defaultStrings from "i18n/en-x-default";
import { AppProviders } from "./components/Provider/AppProvider";

// const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   );
// };

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
