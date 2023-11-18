import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-navhero',
  template: `
    <div class="navigation">
      <ul class="nav nav-fill align-items-center">
        <li class="nav-item">
          <a class="navbar-brand text-white h3" href=""
            ><img class="logo img-fluid" src="/assets/images/GM.svg" alt=""
          />Guillermo Mateo</a>
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h5 ">About Me</p></a
          >
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h5 ">Portfolio</p></a
          >
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h5 ">Contact Info</p></a
          >
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h5 ">Resume</p></a
          >
        </li>
      </ul>
    </div>

    <div>
    <img class="img" src="/assets/images/hero.jpg" alt="">
    </div>
  `,
  styles: `
  .navigation, .navbar{
    background-color: #00A2E8;
  }
  .img{
      width: 100%;
    }
  .logo {
       height: 75px
  }
  `,
})
export class NavheroComponent {}
