import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/Layout";
import PageContent from "@/components/inner/home/PageContent";

export default function Home() {
  return (
   <>
   <Layout>
<PageContent />
   </Layout>
   </>
  );
}
