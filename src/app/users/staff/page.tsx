import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MainStaff from "./Main";
import MainContent from './../../../components/MainContent';

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const MainPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="staff" />
      <MainContent>
      <div className="flex flex-col gap-1">
        <MainStaff />
      </div>
      </MainContent>
    </DefaultLayout>
  );
};

export default MainPage;
