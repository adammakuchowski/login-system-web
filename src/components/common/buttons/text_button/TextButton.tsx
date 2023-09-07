import {TextButtonContainer} from './TextButtonStyled'

interface TextButtonProps {
  text: string;
  buttonAction?: () => void;
  overrideStyle?: object;
}

const TextButton = ({
  text,
  buttonAction,
  overrideStyle,
}: TextButtonProps): JSX.Element => {
  const onButtonAction = () => buttonAction && buttonAction()

  return (
    <>
      <TextButtonContainer 
        onClick={onButtonAction} 
        style={overrideStyle}
        >
        {text}
      </TextButtonContainer>
    </>
  )
}

export default TextButton
