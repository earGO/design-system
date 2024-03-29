import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import {Icon, Text, Tabs} from '../src'

storiesOf(`Tabs`, module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      }
    }
  })
  .add(
    'Default',
    () => (
      <ThemeProvider theme={theme}>
        <Tabs>
          <Tabs.TabPane tabKey="tab1" tab="Tab 1">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Tabs.TabPane>
          <Tabs.TabPane tabKey="tab2" tab="Tab 2">
            <Text>
              Nunc efficitur lacus a nisi hendrerit congue. Ut sagittis in arcu
              vitae condimentum. Nunc non sapien in lacus mollis pharetra
              eleifend id turpis. Donec eget tempus nisl. Curabitur eu imperdiet
              felis, vel interdum ex. Vivamus ut mi tortor. Sed sit amet tellus
              tellus. Phasellus finibus nisi a velit pharetra, eget consequat
              lorem tristique.
            </Text>
          </Tabs.TabPane>
          <Tabs.TabPane
            tabKey="tab3"
            tab={[<Icon name="help" size={18} />, <Text ml={2}>Tab 3</Text>]}
          >
            <Text>
              Maecenas sed metus elit. Aenean rhoncus tempor sollicitudin. Sed
              pulvinar malesuada odio quis molestie. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Aenean maximus justo mi, sit amet viverra elit porttitor id. Sed
              gravida sem dolor, ut interdum dolor aliquet non. Etiam faucibus
              nisi quis ullamcorper efficitur. Fusce maximus commodo ante,
              posuere rutrum odio malesuada ut.
            </Text>
          </Tabs.TabPane>
          <Tabs.TabPane tabKey="tab4" tab="Tab 4" disabled>
            <Text>
              Curabitur eu imperdiet felis, vel interdum ex. Vivamus ut mi
              tortor. Sed sit amet tellus tellus. Phasellus finibus nisi a velit
              pharetra, eget consequat lorem tristique. Etiam faucibus nisi quis
              ullamcorper efficitur. Fusce maximus commodo ante, posuere rutrum
              odio malesuada ut. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Aenean maximus
              justo mi, sit amet viverra elit porttitor id.
            </Text>
          </Tabs.TabPane>
        </Tabs>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )
  .add(
    'One Child',
    () => (
      <ThemeProvider theme={theme}>
        <Tabs>
          <Tabs.TabPane tabKey="tab1" tab="Tab 1">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Tabs.TabPane>
        </Tabs>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )
