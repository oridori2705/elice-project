import styled from '@emotion/styled'

export interface CardImageProps {
  isLogo: boolean
  imgUrl: string
}

interface CardImageImgDivProps extends CardImageProps {}

const CardImageWrapperDiv = styled.div`
  position: relative;
  min-width: auto;
  padding: 0px;
  border-bottom: 1px solid rgb(240, 241, 243);
  background-color: transparent;
`

const CardImageDiv = styled.div`
  width: 100%;
  height: 145px;
  display: flex;
  background-color: rgb(58, 58, 76);
  align-items: center;
  justify-content: center;
`

const CardImageImg = styled.div<CardImageImgDivProps>`
  display: inline-block;
  width: ${props => (props.isLogo ? '6.5rem' : '100%')};
  min-width: ${props => (props.isLogo ? '6.5rem' : '100%')};
  height: ${props => (props.isLogo ? '6.5rem' : '100%')};
  background-color: rgb(58, 58, 76);
  background-image: url(${props => props.imgUrl});
  background-position: center center;
  background-size: ${props => (props.isLogo ? 'contain' : 'cover')};
  background-repeat: no-repeat;
`

export const CardImage = ({ isLogo, imgUrl }: CardImageProps) => {
  return (
    <CardImageWrapperDiv>
      <CardImageDiv>
        <CardImageImg
          isLogo={isLogo}
          imgUrl={
            imgUrl ||
            'https://academy.elice.io/static/images/courses/course_logo_default.png'
          }
        />
      </CardImageDiv>
    </CardImageWrapperDiv>
  )
}
