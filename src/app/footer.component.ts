import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  template: `
<footer class="d-flex flex-wrap justify-content-between align-items-center py-1 my-2 border-top">
    <div class="col-md-4 d-flex align-items-center ms-4">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <img class="logo-footer" src="/assets/images/GM.svg" alt="">
      </a>
      <span class="text-muted">© 2023 Guillermo Mateo</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex me-4">
      <li class="ms-3"><a class="text-muted" href="#"><img class="logo-footer" src="/assets/images/mail.png" alt=""></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img class="logo-footer" src="/assets/images/github.svg" alt=""></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img class="logo-footer" src="/assets/images/linkedin.svg" alt=""></a></li>
    </ul>
  </footer>
  `,
  styles: `
  .logo-footer{
    width: 35px
  }`
})
export class FooterComponent {

}
