import { Dispatch, SetStateAction, useState } from 'react'

const useTextInput = (
  inputValue: string,
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<string>>,
] => {
  const [value, setValue] = useState(inputValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, onChange, setValue]
}

export default useTextInput
