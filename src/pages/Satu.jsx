import { Fragment } from 'react'
import '../assets/1.css'
import '../assets/1.js'

const Satu = () => {
  return <Fragment>
    <h6>Disable Klik Kanan</h6>
    <iframe
      src={import.meta.env.VITE_DRIVE}
    />
    <p>Tetap tidak bisa, sebab ikon itu selalu muncul</p>
  </Fragment>
}

export default Satu
