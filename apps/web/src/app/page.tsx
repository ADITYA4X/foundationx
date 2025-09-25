import { add } from '@foundation/sample-lib'

export default function Home() {
  const a = 9
  return (
    <div>
      <main>Hello world! {add(55, 44)}</main>
    </div>
  )
}
