// src/components/ui/ModalBox.tsx
"use client"
   
import { useEffect, useRef } from 'react'

type ModalProps = {
   children: React.ReactNode
   onClose: () => void
}

export default function ModalBox(props: ModalProps){
   const {children, onClose} = props
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            onClose();
         }
      };

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.body.style.overflow = '';
         document.documentElement.style.overflow = '';
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [onClose]);


   return (
      <div className="fixed top-0 left-0 z-[9999] w-screen h-screen bg-black/50 flex justify-center items-center">
         <div 
            ref={ref} 
            className="overflow-x-auto bg-white dark:bg-slate-900 p-5 pt-10 rounded-xl
            w-[80vw]
            lg:w-[60vw]"
         >
            {children}
         </div>
      </div>
   )
}