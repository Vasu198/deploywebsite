"use client"

import type React from "react"

import { useState } from "react"
import LeadCaptureForm from "./lead-capture-form"

interface LeadCaptureModalProps {
  children: (openForm: (variant: string) => void) => React.ReactNode
}

export default function LeadCaptureModal({ children }: LeadCaptureModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [variant, setVariant] = useState<string>("marketing")

  const openForm = (formVariant: string) => {
    setVariant(formVariant)
    setIsOpen(true)
  }

  const closeForm = () => {
    setIsOpen(false)
  }

  return (
    <>
      {children(openForm)}
      <LeadCaptureForm variant={variant as any} isOpen={isOpen} onClose={closeForm} />
    </>
  )
}
