import { RocketIcon, Tag, TagProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { memo } from 'react'

interface BoostedTag extends TagProps {
  // Add Object to bypass typescript warning
  style?: object
}

const BoostedTag: React.FC<BoostedTag> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag
      style={{ background: 'none', color: '#bb935c', border: '1px solid #bb935c', borderRadius: '3xl' }}
      mx={2}
      py={1}
      px={1}
      // outline
      startIcon={<RocketIcon width="18px" color="#bb935c" mr="4px" />}
      {...props}
    >
      {t('Boosted')}
    </Tag>
  )
}

export default memo(BoostedTag)
