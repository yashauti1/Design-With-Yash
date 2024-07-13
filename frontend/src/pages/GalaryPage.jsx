import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from "../assets/uiuxgalary/11.jpg"
import img2 from "../assets/uiuxgalary/11.jpg"
import img3 from "../assets/uiuxgalary/12.jpg"
import img4 from "../assets/uiuxgalary/13.jpg"
import img5 from "../assets/uiuxgalary/14.jpg"
import img6 from "../assets/uiuxgalary/16.jpg"
import img7 from "../assets/uiuxgalary/Error Page.jpg"
import img8 from "../assets/uiuxgalary/Checkout page.jpg"
import img9 from "../assets/uiuxgalary/Landing page.jpg"
import img10 from "../assets/uiuxgalary/Login page.jpg"
import img11 from "../assets/uiuxgalary/Message page.jpg"
import img12 from "../assets/uiuxgalary/Music player.jpg"
import img13 from "../assets/uiuxgalary/Toggle.jpg"
import img14 from "../assets/uiuxgalary/popupoverlay.jpg"

function GalaryPage() {
  return (
    
<>
<Navbar />
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img1} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img2} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img3} alt=""></img>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img5} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img6} alt=""></img>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img7} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img8} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img9} alt=""></img>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img10} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img11} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img12} alt=""></img>
        </div>
    </div>
</div>
<Footer/>
</>
  )
}

export default GalaryPage
