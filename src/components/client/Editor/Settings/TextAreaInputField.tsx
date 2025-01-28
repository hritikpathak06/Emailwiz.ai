import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TextAreaInputField = ({ label, value, onHandleInputChnage }: any) => {


  return (
    <div>
      <Label>{label}</Label>
      <Textarea
        value={value}
        onChange={(e) => onHandleInputChnage(e.target.value)}
      />
    </div>
  )
}

export default TextAreaInputField