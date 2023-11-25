import {Component} from 'react'

import {v4 as uid} from 'uuid'

import WordItem from './components/WordItem'

import {
  BgContainer,
  AppContainer,
  WordsContainer,
  DescriptionContainer,
  Description,
  AppHeading,
  InputContainer,
  InputFormContainer,
  InputElement,
  AddButton,
  NoWordsImage,
  WordsListContainer,
} from './styledComponents'

import './App.css'

class App extends Component {
  state = {
    wordInput: '',
    wordLength: '',
    wordsList: [],
  }

  onChangeInput = event => {
    this.setState({wordInput: event.target.value})
  }

  submitWord = event => {
    event.preventDefault()
    const {wordInput} = this.state
    const wordLength = wordInput.length
    const newWordItem = {
      id: uid(),
      wordInput,
      wordLength,
    }

    this.setState(prev => ({
      wordsList: [...prev.wordsList, newWordItem],
      wordInput: '',
      wordLength: '',
    }))
  }

  render() {
    const {wordInput, wordsList} = this.state
    const areWordsPresent = wordsList.length > 0
    const noWordsImage =
      'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'

    return (
      <BgContainer>
        <AppContainer>
          <WordsContainer>
            <DescriptionContainer>
              <Description>Count the characters like a Boss...</Description>
            </DescriptionContainer>
            {areWordsPresent ? (
              <WordsListContainer>
                {wordsList.map(each => (
                  <WordItem key={each.id} details={each} />
                ))}
              </WordsListContainer>
            ) : (
              <NoWordsImage src={noWordsImage} alt="no user inputs" />
            )}
          </WordsContainer>
          <InputContainer>
            <AppHeading>Character Counter</AppHeading>
            <InputFormContainer onSubmit={this.submitWord}>
              <InputElement
                placeholder="Enter the Characters here"
                type="text"
                onChange={this.onChangeInput}
                value={wordInput}
              />
              <AddButton as="button" type="submit">
                Add
              </AddButton>
            </InputFormContainer>
          </InputContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default App
