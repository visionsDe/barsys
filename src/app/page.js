"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/Layout";
import PageContent from "@/components/inner/home/PageContent";
import ScrollProvider from "../../Context/ScrollProvider";

export default function Home() {
  return (
    <ScrollProvider>
      <Layout>
        <PageContent />
      </Layout>
    </ScrollProvider>
  );
}
