
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <h1>404</h1>
    <p>Page not fond</p>
  <Link to={'/'}>Back to home</Link>

    </>
  )
}

export default ErrorPage