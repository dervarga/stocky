export const TestWarningAlert = () => {
  return (
    <div
      className='mx-auto w-full max-w-xl bg-orange-100 p-4 text-sm text-yellow-700'
      role='alert'
    >
      <p className='text-center'>
        Depending on usage, you might see test data on this page instead of real
        data
      </p>
    </div>
  )
}
