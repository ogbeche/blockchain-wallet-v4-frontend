import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'

import { Icon, TabMenu, TabMenuItem } from 'blockchain-info-components'
import { TextBox } from 'components/Form'

const Wrapper = styled.div`
  width: 100%;
  padding: 8px 30px;
  box-sizing: border-box;
  background-color: ${props => props.theme['white-blue']};
  border-bottom: 1px solid ${props => props.theme['gray-1']};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Search = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (min-width: 1200px) {
    width: auto;
  }
`
const SearchIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
`
const LinkItem = styled(TabMenuItem)`
  &.active {
    & :after {
      position: absolute;
      content: '';
      top: 40px;
      left: 0;
      width: 100%;
      border-bottom: 4px solid ${props => props.theme['brand-secondary']};
    }
  }
`
const MenuTop = () => (
  <Wrapper>
    <Container>
      <TabMenu>
        <LinkContainer to='/settings/addresses/btc' activeClassName='active'>
          <LinkItem>
            <FormattedMessage
              id='scenes.settings.addresses.menutop.btc'
              defaultMessage='Bitcoin'
            />
          </LinkItem>
        </LinkContainer>
        <LinkContainer to='/settings/addresses/bch' activeClassName='active'>
          <LinkItem>
            <FormattedMessage
              id='scenes.settings.addresses.menutop.bch'
              defaultMessage='Bitcoin Cash'
            />
          </LinkItem>
        </LinkContainer>
      </TabMenu>
      <Search>
        <Field name='search' component={TextBox} />
        <SearchIcon name='search' size='20px' />
      </Search>
    </Container>
  </Wrapper>
)

export default reduxForm({ form: 'settingsAddresses' })(MenuTop)
