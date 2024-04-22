import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from '@/node_modules/next/image'
import { Button } from './ui/button'

interface MeetingModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  className?: string
  buttonText?: string
  handleClick?: () => void
  image?: string
  buttonIcon?: string
  children?: ReactNode
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  buttonIcon,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col w-full max-w-[520px] gap-6 border-none bg-dark-1 px-6 py-9 text-white rounded-md">
        <div className="flex flex-col gao-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="Image" width={72} height={72} />
            </div>
          )}
          <h1
            className={cn('text-3xl font-bold leading-[42px] pb-4', className)}
          >
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt="Icon" width={13} height={13} />
            )}{' '}
            &nbsp;
            {buttonText || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MeetingModal
