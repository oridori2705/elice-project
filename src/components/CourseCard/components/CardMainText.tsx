import styled from '@emotion/styled'

interface CardMainTextProps {
  content: string
}

const CardMainTextDiv = styled.div`
  max-height: 3.2em;
  line-height: 1.6;
  overflow: hidden;
  padding: 0 !important;
  position: relative;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  color: #5e5f61;
`

export const CardMainText = ({ content }: CardMainTextProps) => {
  return <CardMainTextDiv>{content}</CardMainTextDiv>
}
