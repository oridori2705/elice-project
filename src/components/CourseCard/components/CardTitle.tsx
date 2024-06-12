import styled from '@emotion/styled'

interface CardTitleProps {
  title: string
}

const CardTitleWrapperDiv = styled.div`
  margin-bottom: 0.5rem;
  line-height: 120%;
  user-select: auto;
  max-height: 3.2em;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-overflow: ellipsis;
  font-size: 1rem;
  color: #222;
  font-weight: 700;
`

export const CardTitle = ({ title }: CardTitleProps) => {
  return <CardTitleWrapperDiv>{title}</CardTitleWrapperDiv>
}
