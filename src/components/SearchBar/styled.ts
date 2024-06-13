import styled from '@emotion/styled'

export const SearchBarWrapperDiv = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
`
export const SearchIconDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`

export const SearchInputDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  margin: 0px 1rem;
`

export const SearchBarInput = styled.input`
  width: 100%;
  margin: 0px;
  border: none;
  background: transparent;
  line-height: 1.5;
  font-family: inherit;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  height: 2.875rem;
  font-size: 0.775rem;
`

export const SearchIconSvg = styled.svg`
  overflow: visible;
  width: 1em;
  height: 1em;
  font-size: 1rem;
  display: inline-block;
  vertical-align: middle;
`
