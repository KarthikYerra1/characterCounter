import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 15px;
  width: 90%;
  height: 80vh;
`

export const WordsContainer = styled.div`
  width: 50%;
  background-color: #ffc533;
  font-family: 'Roboto';
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px 0px 0px 10px;
`

export const DescriptionContainer = styled.div`
  background-color: #ffbf1f;
  height: 30%;
  width: 100%;
  font-family: 'Roboto';
  color: #0f172a;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`

export const Description = styled.h1`
  font-size: 32px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 50%;
  height: 100%;
  background-color: #0f172a;
  border-radius: 0px 10px 10px 0px;
`

export const AppHeading = styled.h1`
  font-size: 24px;
  color: #ffbf1f;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 60px;
`

export const InputFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const InputElement = styled.input`
  height: 40px;
  width: 82%;
  background-color: #fff;
  padding: 10px 15px;
  font-family: 'Roboto';
  color: #272c47;
  border-style: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

export const AddButton = styled(InputElement)`
  width: 16%;
  background-color: #ffc533;
`
export const NoWordsImage = styled.img`
  width: 100%;
  height: 90%;
`

export const WordsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  margin: 5px;
`
