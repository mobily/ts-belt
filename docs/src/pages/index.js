import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  React.useLayoutEffect(() => {
    localStorage.setItem('theme', 'light')
    document.querySelector('.navbar__brand').style = 'display: none;'
  }, [])

  return (
    <Layout>
      <header className={clsx('hero', styles.hero)}>
        <div className={styles.heroBanner}>
          <img
            className={styles.titleImage}
            src="img/hero-logo.png"
            alt="ts-belt - fast, modern, and practical utility library for FP in TypeScript"
          />
          <div className={styles.container}>
            <h1 className={styles.h1}>{siteConfig.title}</h1>
            <p className={styles.summary}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button', styles.button, styles.buttonOutline)}
                to={useBaseUrl('docs')}
              >
                Get started
              </Link>
              <Link
                className={clsx('button', styles.button, styles.buttonFull)}
                to={useBaseUrl('api/array')}
              >
                Go to API
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default Home
