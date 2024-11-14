import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../model/Issue.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  baseUrl: string = 'http://localhost:3000/issues';

  private issuesSubject = new BehaviorSubject<Issue[]>([]);
  issues$ = this.issuesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialIssues();
  }

  private loadInitialIssues(): void {
    this.http.get<Issue[]>(this.baseUrl).subscribe(issues => {
      this.issuesSubject.next(issues);
    });
  }

  getIssues(): Observable<Issue[]> {
    return this.issues$;
  }

  getIssueById(issue_id: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.baseUrl}/${issue_id}`);
  }

  createIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.baseUrl, issue).pipe(
      tap(newIssue => {
        const currentIssues = this.issuesSubject.value;
        this.issuesSubject.next([...currentIssues, newIssue]);
      })
    );
  }

  deleteIssue(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const currentIssues = this.issuesSubject.value.filter(issue => issue.id !== id);
        this.issuesSubject.next(currentIssues);
      })
    );
  }

  updateIssue(issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.baseUrl}/${issue.id}`, issue).pipe(
      tap(updatedIssue => {
        const updatedIssues = this.issuesSubject.value.map(i =>
          i.id === updatedIssue.id ? updatedIssue : i
        );
        this.issuesSubject.next(updatedIssues);
      })
    );
  }
}
