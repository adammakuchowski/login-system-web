import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PinterestIcon from '@mui/icons-material/Pinterest'

import {
  ReferencesContainer,
  SocialMediaIconWrapper
} from './MediaReferencesStyled'

interface SocialMediaIcon {
  iconComponent: JSX.Element;
  iconAddress: string;
}

const MediaReferences = (): JSX.Element => {
  const openPage = (address: string): Window | null => window.open(address)

  const socialMedias: SocialMediaIcon[] = [
    {
      iconComponent: <TwitterIcon sx={{color: '#cdcdcd'}}/>,
      iconAddress: 'https://twitter.com/'
    },
    {
      iconComponent: <InstagramIcon sx={{color: '#cdcdcd'}}/>,
      iconAddress: 'https://www.instagram.com/'
    },
    {
      iconComponent: <FacebookIcon sx={{color: '#cdcdcd'}}/>,
      iconAddress: 'https://facebook.com/'
    },
    {
      iconComponent: <YouTubeIcon sx={{color: '#cdcdcd'}}/>,
      iconAddress: 'https://www.youtube.com/'
    },
    {
      iconComponent: <PinterestIcon sx={{color: '#cdcdcd'}}/>,
      iconAddress: 'https://www.pinterest.com'
    }
  ]

  return (
    <ReferencesContainer>
      {socialMedias.map((icon: SocialMediaIcon, index: number) => (
        <SocialMediaIconWrapper key={index} onClick={() => openPage(icon.iconAddress)}>
          {icon.iconComponent}
        </SocialMediaIconWrapper>
      ))}
    </ReferencesContainer>
  )
}

export default MediaReferences
