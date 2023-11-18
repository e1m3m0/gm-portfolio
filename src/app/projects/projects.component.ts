import { Component } from '@angular/core';
import { RepolistService } from '../repolist.service';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private repos : RepolistService) {}

  projectsList: any
  imagelist = ["608910260","629268901"]
  ngOnInit() {
    this.repos.getRepList().subscribe(repos => {
      this.projectsList = repos
      for (let i = 0; i < this.projectsList.length; i++) {
        if (this.projectsList[i].private === true ) {
          this.projectsList[i].splice(i,1)
        }
      }
      for (let i = 0; i < this.imagelist.length; i++) {
        let imageURL = `/assets/images/${this.imagelist[i]}.png`
        console.log(imageURL)
        for (let j = 0; j < this.projectsList.length; j++){
          if ( this.projectsList[j].id == this.imagelist[i] ) {
            this.projectsList[j].imageURL = imageURL
          }
        }
      }
    })
  }

  splitName(theString : string) {
    return theString.replace(/-/g,' ').split(/(?=[A-Z])/).join(" ");
  }


}
