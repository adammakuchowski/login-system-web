import {TextButtonContainer, TextWrapper} from './TextButtonStyled'

interface TextButtonProps {
  text: string;
  action?: () => void;
  overrideStyle?: object;
}

const TextButton = ({
  text,
  action,
  overrideStyle,
}: TextButtonProps): JSX.Element => {
  const onAction = () => action && action()

  return (
    <TextButtonContainer onClick={onAction} style={overrideStyle}>
      <TextWrapper>{text}</TextWrapper>
    </TextButtonContainer>
  )
}

export default TextButton
