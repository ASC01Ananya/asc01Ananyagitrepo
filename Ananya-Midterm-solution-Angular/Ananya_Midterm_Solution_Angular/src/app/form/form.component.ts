
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Issue } from '../model/Issue.model';
import { IssueService } from '../services/issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  // standalone: false,
  // imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  operation: string = "Add";
  // beverageOptions: string[] = ['Coffee', 'Tea', 'Juice', 'Water'];
  addForm: FormGroup;
  selectedIssueId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.addForm = this.formBuilder.group({
      id: [null],
      title: ['', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.required]],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      Assign: ['', Validators.required],
      Date: ['', [Validators.required, this.pastDateValidator]],

    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const issueId = params.get('id');
      console.log(issueId);
      if (issueId) {
        this.selectedIssueId = +issueId;
        this.loadIssueData(this.selectedIssueId);
      }
    });
  }



  pastDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    return selectedDate >= today ? { pastDate: true } : null;
  }

  loadIssueData(issue_id: number): void {
    this.issueService.getIssueById(issue_id).subscribe(issue => {
      if (issue) {
        this.operation = "Update";
        this.addForm.patchValue(issue); 
      } else {
        console.error(`Issue with ID ${issue_id} not found.`);
      }
    });
  }

  saveIssue(): void {
    if (this.addForm.valid) {
      const issueData = this.addForm.value;

      if (this.selectedIssueId) {
        this.issueService.updateIssue(issueData).subscribe(updatedIssue => {
          console.log('Issue updated:', updatedIssue);
          this.addForm.reset(); 
          this.router.navigate(['/issues']).then(() => {
            console.log('Navigated back to issue list');
          });
        });
      } else {
        this.issueService.createIssue(issueData).subscribe(newIssue => {
          console.log('New issue created:', newIssue);
          this.addForm.reset(); 
          this.router.navigate(['/issues']).then(() => {
            console.log('Navigated back to Issues list');
          });
        });
      }
    } else {
      console.error('Form is not valid');
    }
  }
}
