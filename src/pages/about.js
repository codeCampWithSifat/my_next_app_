import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
    return (
        <div>
            <h2>this is another about page component</h2>
        </div>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }