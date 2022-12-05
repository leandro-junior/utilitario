import { useState } from 'react'
import * as S from './styles'

enum TRANSFORM_TYPE {
  SENTENCE_CASE = 'SENTENCE_CASE',
  UPPERCASE = 'UPPERCASE',
  LOWERCASE = 'LOWERCASE',
  FIRST_UPPERCASE = 'FIRST_UPPERCASE'
}

type TRANSFORM_STRING =
  | TRANSFORM_TYPE.SENTENCE_CASE
  | TRANSFORM_TYPE.FIRST_UPPERCASE
  | TRANSFORM_TYPE.LOWERCASE
  | TRANSFORM_TYPE.UPPERCASE

const sentenceCase = (text: string): string | void => {
  return text.replace(/(^|(\n)|([.?;!]) *)([a-z])/g, (match) =>
    match.toUpperCase()
  )
}

const capitalizeFirstLetter = (string: string) => {
  return string.replace(/^./, string[0].toUpperCase())
}

const transformString = {
  [TRANSFORM_TYPE.SENTENCE_CASE]: (text: string) => {
    return text ? sentenceCase(text) : ''
  },
  [TRANSFORM_TYPE.FIRST_UPPERCASE]: (text: string) => {
    return text ? capitalizeFirstLetter(text) : ''
  },
  [TRANSFORM_TYPE.LOWERCASE]: (text: string) => {
    return text ? text.toLowerCase() : ''
  },
  [TRANSFORM_TYPE.UPPERCASE]: (text: string) => {
    return text ? text.toUpperCase() : ''
  }
}

const TextTransform = () => {
  const [value, setValue] = useState<string>('')
  const [transformedValue, setTransformedValue] = useState<string>('')
  const [transformType, setTransformType] = useState<TRANSFORM_STRING>(
    TRANSFORM_TYPE.SENTENCE_CASE
  )

  const uppercaseText = () => {
    const transformedText = transformString[transformType](value)

    setTransformedValue(transformedText)
  }
  return (
    <S.Wrapper>
      <h1>TextUppercase</h1>
      <S.WrapperList>
        <S.List onClick={() => setTransformType(TRANSFORM_TYPE.SENTENCE_CASE)}>
          Camel Case
        </S.List>
        <S.List onClick={() => setTransformType(TRANSFORM_TYPE.UPPERCASE)}>
          Uppercase
        </S.List>
        <S.List onClick={() => setTransformType(TRANSFORM_TYPE.LOWERCASE)}>
          LowerCase
        </S.List>
        <S.List
          onClick={() => setTransformType(TRANSFORM_TYPE.FIRST_UPPERCASE)}
        >
          First Uppercase
        </S.List>
      </S.WrapperList>
      <S.TextArea onChange={(e) => setValue(e.target.value)}></S.TextArea>
      <S.Button onClick={uppercaseText}>Transformar</S.Button>
      <S.TextArea defaultValue={transformedValue}></S.TextArea>
    </S.Wrapper>
  )
}

export default TextTransform
