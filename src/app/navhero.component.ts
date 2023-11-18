import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-navhero',
  template: `
    <div class="navigation">
      <ul class="nav nav-fill align-items-center">
        <li class="nav-item">
          <a class="text-white" href=""
            ><img src="/assets/images/logo.png" alt=""
          /></a>
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h4 text-uppercase">About Me</p></a
          >
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h4 text-uppercase">Portfolio</p></a
          >
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h4 text-uppercase">Contact Info</p></a
          >
        </li>
        <li class="nav-item">
          <a class="text-white" href="#">
            <p class="h4 text-uppercase">Resume</p></a
          >
        </li>
      </ul>
    </div>
    <div>
    <img class="img" src="/assets/images/hero.jpg" alt="">
    </div>
  `,
  styles: `
  .navigation{
    background-color: #00A2E8;
  }
  .img{
      width: 100%;
    }
  `,
})
export class NavheroComponent {}
