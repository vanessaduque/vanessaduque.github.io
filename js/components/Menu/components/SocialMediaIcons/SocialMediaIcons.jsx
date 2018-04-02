import React from 'react'
import Icon from '../../../Icon'
import IconsWrapper from './styled'

const SocialMediaIcons = () => (
  <IconsWrapper >
    <a href="https://www.instagram.com/101pj2/"
       rel="noopener noreferrer"
       target="_blank">
      <Icon glyph="instagram" size="16"/>
    </a>
    <a href="mailto:vanessaduque.studio@gmail.com">
      <Icon glyph="email" size="16"/>
    </a>
  </IconsWrapper>
)

export default SocialMediaIcons
