
import { Metadata } from "next";
import SignIn from "./auth/signin/page";
import ECommerce from "@/components/Dashboard/E-commerce";
import Main from "./Main";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  
  return (
    <>
      <Main/>
    </>
  );
}
