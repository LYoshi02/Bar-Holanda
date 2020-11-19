import React from "react"

import About from "../components/about/about"
import Head from "../components/head/head"
import Header from "../components/header/header"
import Images from "../components/images/images"
import Text from "../components/text/text"
import Footer from "../components/footer/footer"
import Layout from "../components/layout/layout"

import styles from "./index.module.scss"

export default function Home() {
  return (
    <Layout>
      <Head />
      <Header />
      <div className={styles.Container}>
        <Text />
        <Images />
        <About />
      </div>
      <Footer />
    </Layout>
  )
}
