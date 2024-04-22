import React, { ReactNode } from 'react'

 const MainContent=({children}:{ children: React.ReactNode })=> {
  return <div className="bg-white dark:bg-meta-4 md:p-2 p-3 rounded min-h-[calc(100vh-90px)] relative">{children}</div>;
}
export default MainContent; 