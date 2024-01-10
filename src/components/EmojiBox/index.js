import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './EmojiBox.module.css'

const EmojiBox = ({ name, kode }) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 600)
    return () => clearTimeout(timer)
  }, [selected])

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(kode)
        setSelected(true)
      }}
      // className={`emoji-box ${selected ? 'selected' : ''}`}
      className={classnames(styles.emojiBox, {
        [styles.selected]: selected
      })}
      >
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${kode.codePointAt(0)};`
        }} />
      <p className={classnames(styles.emojiText, {
        [styles.selectedText]: selected
      })}>
        {selected ? 'Copied!' : name}
      </p>
    </div>
  )
}

EmojiBox.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
}

export default EmojiBox