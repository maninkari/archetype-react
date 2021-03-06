/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-navi'
import styles from './Menu.module.css'

function Menu() {
  return (
    <ol className={styles.bar}>
      <li>
        <Link href={`/`} prefetch={null}>
          Home
        </Link>
      </li>
      <li>
        <Link href={`/one`} prefetch={null}>
          One
        </Link>
      </li>
      <li>
        <Link href={`/two`} prefetch={null}>
          Two
        </Link>
      </li>
    </ol>
  )
}

export default Menu
