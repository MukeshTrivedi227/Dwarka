import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">Azziptech</a></h1>
      
      <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
        <li class="nav-item">
        <Link class="nav-link " to="/">
          <span>Home</span>
        </Link>
      </li>


          <li class="dropdown">
          <Link class="nav-link "to="/Aboutus">
          <span>About us</span>
          <i class="bi bi-chevron-down"></i>
        </Link>
         
            <ul>
            <li class="nav-item">
            <Link class="nav-link "to="/Aboutus">
          <span>About us</span>
            </Link>
            </li>
            <Link class="nav-link " to="/Career">
            <span> Career</span>
             </Link>
            <Link class="nav-link " to="/Socialactivity">
            <span> Social Activity</span>
            </Link>
            
            </ul>
          </li>
          <li class="dropdown">
          <Link class="nav-link " to="/Services">
          <span>Services</span>
          <i class="bi bi-chevron-down"></i>
        </Link>
         
            <ul>
            <Link class="nav-link " to="/Services/1">
          <span>Web Devlopment</span>
            </Link>
            <Link class="nav-link " to="/Services/2">
            <span> App Devlopment</span>
             </Link>
            <Link class="nav-link " to="/Services/3">
            <span> Digital Marketing</span>
            </Link>
            <Link class="nav-link " to="/Services/4">
          <span>Log Design</span>
            </Link>
            <Link class="nav-link " to="/Services/5">
            <span> Graphics</span>
             </Link>
            <Link class="nav-link " to="/Services/6">
            <span> Video editing</span>
            </Link>
            <Link class="nav-link " to="/Services/7">
            <span> Digital post Design</span>
            </Link>
            </ul>
          </li>
          <li class="dropdown">
          <Link class="nav-link " to="/Products">
          <span> Products </span>
          <i class="bi bi-chevron-down"></i>
        </Link>
           <ul>
            <Link class="nav-link " to="/Products/1">
          <span>E-commerce App/Website</span>
            </Link>
            <Link class="nav-link " to="/Products/2">
            <span> E-Learning App/Website</span>
             </Link>
            <Link class="nav-link " to="/Products/4">
            <span> E-Logbook App/Website</span>
            </Link>
            <Link class="nav-link " to="/Products/5">
            <span> Cab Services</span>
            </Link>
            </ul>
          </li>
          <li class="dropdown">
          <Link class="nav-link " to="/Industries">
          <span>Industries</span>
          <i class="bi bi-chevron-down"></i>
        </Link>
         
            <ul>
            <Link class="nav-link " to="/Business/1">
          <span>Business</span>
            </Link>
            <Link class="nav-link " to="/Retail/2">
            <span> Retail</span>
             </Link>
            <Link class="nav-link " to="/Education/3">
            <span> Education & Learning</span>
            </Link>
            <Link class="nav-link " to="/Manufacturing/4">
          <span>Manufacturing</span>
            </Link>
            <Link class="nav-link " to="/Healthcare/5">
            <span> Health Care</span>
             </Link>
            <Link class="nav-link " to="/Automotive/6">
            <span> Automotive</span>
            </Link>
            <Link class="nav-link " to="/Realestate/7">
            <span> Real Estate</span>
            </Link>
            <Link class="nav-link " to="/Newsmagazine/8">
            <span> News & Magazine</span>
            </Link>
            </ul>
          </li>

          <Link class="nav-link " to="/Protfolio">
          <span>Protfolio</span>
          </Link>
          <Link class="nav-link " to="/Hiredeveloper/1">
          <span>Hire Developer</span>
          </Link>
          <Link class="nav-link " to="/Contact">
          <span>contact</span>
          </Link>
          {/* <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>

          <li><a href="contact.html">Contact</a></li>
          <li><a href="index.html" class="getstarted">Get Started</a></li> */}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}
