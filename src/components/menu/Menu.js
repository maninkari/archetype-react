import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-navi'

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
