import { configure, addDecorator } from '@storybook/react'
import withMockProvider from '../src/stories/mockData/withMockProvider'

addDecorator(withMockProvider)
