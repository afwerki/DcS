import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='Footer_section'>
        <footer>
            <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script>, Coding Journey</p>
       </footer>
    </div>
  )
}

export default Footer