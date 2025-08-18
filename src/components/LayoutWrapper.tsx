// components/LayoutWrapper.tsx
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-6 lg:px-12 xl:px-16 ">
      <div className="max-w-7xl mx-auto ">{children}</div>
    </div>
  );
}
