import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CoursesService } from './courses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { COURSES } from '../../../../server/db-data';
import { Course } from '../model/course';

describe('Course Service', () => {
  let coursesService: CoursesService, httpTestingCountroller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService, HttpClient],
    });
    coursesService = TestBed.inject(CoursesService);
    httpTestingCountroller = TestBed.inject(HttpTestingController);
  });

  it('Should retrive all the courses ', () => {
    coursesService.findAllCourses().subscribe(courses => {
      expect(courses).toBeTruthy('No courses returned');
      expect(courses.length).toBe(12, 'No courses returned');

      const course = courses.find(course => course.id === 12);
      expect(course.titles.description).toBe('Angular Testing Course');
    });

    const req = httpTestingCountroller.expectOne('/api/courses');
    expect(req.request.method).toEqual('GET');
    req.flush({ payload: Object.values(COURSES) });
  });

  it('Should find course by ID', () => {
    coursesService.findCourseById(12).subscribe(course => {
      expect(course).toBeTruthy();
      expect(course.id).toBe(12);
    });

    const req = httpTestingCountroller.expectOne('/api/courses/12');
    expect(req.request.method).toBe('GET');
    req.flush(COURSES[12]);
    httpTestingCountroller.verify();
  });

  it('Should save the course data', () => {
    const changes: Partial<Course> = { titles: { description: 'Testing Course' } };

    coursesService.saveCourse(12, changes).subscribe(course => {
      expect(course.id).toBe(12);
    });
    const req = httpTestingCountroller.expectOne('/api/courses/12');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.titles.description).toEqual('Testing Course');
    req.flush({ ...COURSES[12], ...changes });
  });

  it('Should give an error if save course fails', () => {
    const changes: Partial<Course> = { titles: { description: 'Testing Course' } };

    coursesService.saveCourse(12, changes).subscribe({
      next: () => fail('the save course operation should have failed.'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
      },
    });

    const req = httpTestingCountroller.expectOne('/api/courses/12');
    expect(req.request.method).toEqual('PUT');
    req.flush('Save course failed', { status: 500, statusText: 'Internal Server Error' });
  });

  afterEach(() => {
    httpTestingCountroller.verify();
  });
});
