import {ListItem, Word} from './styledComponents'

const WordItem = props => {
  const {details} = props
  const {wordInput, wordLength} = details

  return (
    <ListItem>
      <Word>
        {wordInput} : {wordLength}
      </Word>
    </ListItem>
  )
}

export default WordItem
