import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const MainPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="customer" />
      <div className="flex flex-col gap-10">
        <h1 className="text-black1 text-3xl font-bold">Hello customer</h1>
      </div>
    </DefaultLayout>
  );
};

export default MainPage;
