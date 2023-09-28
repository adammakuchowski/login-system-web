import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionHeader,
} from './MainDescriptionStyled'

const MainDescription = () => {
  return (
    <DescriptionContainer>
      <DescriptionHeader>Why should I use it?</DescriptionHeader>
      <DescriptionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus lacus, cursus a consectetur quis, rhoncus vitae lorem. Aliquam varius, quam non interdum malesuada, urna magna feugiat felis, ornare fringilla neque purus sed sem. Nunc accumsan aliquet velit eu vehicula. Duis dignissim venenatis dolor. Curabitur vitae convallis dolor.</DescriptionContent>
    </DescriptionContainer>
  )
}

export default MainDescription
