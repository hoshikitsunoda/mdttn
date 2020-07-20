import { WindowSize, Theme } from '../models/theme'

const size: WindowSize = {
  mobile: '350px',
  laptop: '1024px',
}

export const theme: Theme = {
  colors: {
    text: 'rgba(255,255,255, 0.8)',
    secondaryText: 'rgba(15, 15, 15, 0.8)',
  },
  device: {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
  },
}
