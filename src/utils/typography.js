import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'
import OceanBeach from 'typography-theme-ocean-beach'

OceanBeach.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

const typography = new Typography(OceanBeach)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
