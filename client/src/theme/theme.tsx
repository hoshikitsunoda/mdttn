import { WindowSize, Theme } from '../models/theme'

const size: WindowSize = {
  mobile: '350px',
  laptop: '1024px',
}

export const theme: Theme = {
  colors: {
    text: '#fff',
    secondaryText: 'rgba(15, 15, 15, 0.8)',
  },
  device: {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
  },
}
