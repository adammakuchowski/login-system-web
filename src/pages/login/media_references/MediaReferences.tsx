import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PinterestIcon from '@mui/icons-material/Pinterest'

import {
  ReferencesContainer,
  SocialMediaIconWrapper,
} from './MediaReferencesStyled'

interface SocialMediaIcon {
  iconComponent: JSX.Element;
  iconAddress: string;
}

const MediaReferences = () => {
  const openPage = (address: string) => window.open(address)

  const socialMedias: SocialMediaIcon[] = [
    {
      iconComponent: <TwitterIcon />,
      iconAddress: 'https://twitter.com/',
    },
    {
      iconComponent: <InstagramIcon />,
      iconAddress: 'https://www.instagram.com/',
    },
    {
      iconComponent: <FacebookIcon />,
      iconAddress: 'https://facebook.com/',
    },
    {
      iconComponent: <YouTubeIcon />,
      iconAddress: 'https://www.youtube.com/',
    },
    {
      iconComponent: <PinterestIcon />,
      iconAddress: 'https://www.pinterest.com',
    }
  ]

  return (
    <ReferencesContainer>
      {socialMedias.map(icon => (
        <SocialMediaIconWrapper onClick={() => openPage(icon.iconAddress)}>
          {icon.iconComponent}
        </SocialMediaIconWrapper>
      ))}
    </ReferencesContainer>
  )
}

export default MediaReferences
