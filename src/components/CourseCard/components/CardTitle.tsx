import styled from '@emotion/styled'

interface CardTitleProps {
  title: string
}

const CardTitleWrapperDiv = styled.div`
  display: -webkit-box;
  position: relative;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  line-height: 1.2;
  max-height: 3.2em;
`

export const CardTitle = ({ title }: CardTitleProps) => {
  return <CardTitleWrapperDiv>{title}</CardTitleWrapperDiv>
}
