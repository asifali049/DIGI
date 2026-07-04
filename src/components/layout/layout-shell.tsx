import { Header } from "./header";
import { Footer } from "./footer";

export function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}