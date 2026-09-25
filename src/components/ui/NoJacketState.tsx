import React from 'react';
import { Cpu } from 'lucide-react';

interface NoJacketStateProps {
  title?: string;
  message?: string;
}

/** Shown wherever live jacket data is needed but no smart jacket has connected yet */
export default function NoJacketState({
  title = 'No smart jacket connected',
  message = 'Live readings appear here once a smart jacket connects. Use the Connect with Jacket button at the top of the page.',
}: NoJacketStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 py-14 px-6 rounded-3xl border border-dashed border-[#FDE68A] bg-[#FFFBEB]/60">
      <div className="w-12 h-12 rounded-2xl bg-white border border-[#FDE68A] flex items-center justify-center shadow-2xs">
        <Cpu className="w-6 h-6 text-[#D97706]" />
      </div>
      <h3 className="text-base font-bold text-[#0F172A]">{title}</h3>
      <p className="text-sm text-[#64748B] max-w-md">{message}</p>
    </div>
  );
}
