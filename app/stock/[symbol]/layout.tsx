import { GoBackToHome } from '@/components/GoBackToHome'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='p-4'>
      <GoBackToHome />
      {children}
    </div>
  )
}

export default Layout
