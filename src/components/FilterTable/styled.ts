import styled from '@emotion/styled'

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 0.5rem;
  align-items: center;
  margin: 0;
`

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border: 1px solid rgb(225, 226, 228);
`

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`

export const TableHeading = styled.div`
  min-width: 6rem;
  font-weight: 600;
  font-size: 0.65rem;
  color: #5e5f61;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
  text-align: left;
  &:last-child {
    border-right: none;
  }
`
