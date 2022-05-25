import { ReactNode } from "react";
import { Navigation } from "../navigation";

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({children}:LayoutProps) => (
  <>
    <Navigation />
    <div>{children}</div>
  </>
)
