import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/Issue.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issues',
  // standalone: true,
  // imports: [],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent implements OnInit {
  issues:Issue[]=[];
  filteredIssues:Issue[]=[];

  constructor(private issueService:IssueService,private router:Router){}
  ngOnInit(): void {
    this.issueService.getIssues().subscribe((issueData)=>{
      this.issues=issueData;
    this.filteredIssues=[...this.issues];
    });
  }

  

  editIssue(issue: Issue): void {
        this.router.navigate(['/form', issue.id]);  
      }


deleteIssue(id: number): void {
      this.issueService.deleteIssue(id).subscribe(() => {
        this.issues = this.issues.filter(issue => issue.id !== id);
        this.filteredIssues = this.filteredIssues.filter(issue => issue.id !== id);
        console.log(`Issue with ID ${id} deleted`);
      });
    }
    
  filterIssues(searchTerm: string): void {
    if (searchTerm.trim() === '') {
      this.filteredIssues = [...this.issues];  
    } else {
      this.filteredIssues = this.issues.filter(issue => 
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        issue.Assign.toLowerCase().includes(searchTerm.toLowerCase())||
        issue.status.toLowerCase().includes(searchTerm.toLowerCase())||
        issue.priority.toLowerCase().includes(searchTerm.toLowerCase())

      );
    }
}
  
}
