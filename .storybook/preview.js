// @TODO @storybook/react 6 has some updated config options. Should implement.
import { configure, addDecorator } from '@storybook/react'
import withMockProvider from '../src/stories/mockData/withMockProvider'

addDecorator(withMockProvider)
