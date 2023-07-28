import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <h2>this is admin page component</h2>
    </div>
  );
};

export default AdminPage;
AdminPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
