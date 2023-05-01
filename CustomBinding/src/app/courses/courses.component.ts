import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

    courses=[
      {
        id:101,name:'Javascript For Beginners',author:'John Heikela',duration:48,type:'Free',price:0.00,
        ratings:3.5,image:'assets/courses/javascript.png',description:'In this course you will learn the fundamentals\
        of Javascript. This course is purely designed for beginners'
      },
      {
        id:102,name:'Angular For Beginners',author:'Michale David',duration:48,type:'Premium',price:150.00,
        ratings:4.0,image:'assets/courses/angular.png',description:'In this course you will learn the fundamentals\
        of Angular. This course is purely designed for beginners'
      },
      {
        id:103,name:'React For Beginners',author:'Gaurav Kumar',duration:48,type:'Free',price:0.00,
        ratings:4.5,image:'assets/courses/react.jpg',description:'In this course you will learn the fundamentals\
        of React. This course is purely designed for beginners'
      },
      {
        id:104,name:'Advance Angular Course',author:'Arvind Kumar',duration:48,type:'Premium',price:120.00,
        ratings:4.8,image:'assets/courses/angular.png',description:'In this course you will learn the Advance concepts\
        of Angular. This course is designed for beginners and working professional'
      },
      {
        id:105,name:'Advance Javascript course',author:'Bhavna',duration:48,type:'Premium',price:210.00,
        ratings:4.3,image:'assets/courses/javascript.png',description:'In this course you will learn the Advance concept\
        of Javascript. This course is designed for beginners and working professional'
      },
      {
        id:106,name:'Advance React course',author:'Rishav sen',duration:48,type:'Premium',price:148.00,
        ratings:3.7,image:'assets/courses/react.jpg',description:'In this course you will learn the Advance concept\
        of React. This course is designed for beginners and working professional'
      },
      {
        id:107,name:'Dot Net Beginner',author:'Jamie Calio',duration:48,type:'Free',price:0.00,
        ratings:4.5,image:'assets/courses/dotnet.png',description:'In this course you will learn the fundamentals\
        of dot net. This course is purely designed for beginners'
      },
      {
        id:108,name:'Advance .NET',author:'David hesan',duration:48,type:'Free',price:0.00,
        ratings:4.2,image:'assets/courses/dotnet.png',description:'In this course you will learn the advance concept\
        of .NET. This course is designed for beginners and industry professional'
      },
      {
        id:109,name:'Python for Intermediate',author:'William Antony',duration:48,type:'Premium',price:100.00,
        ratings:4.5,image:'assets/courses/python.png',description:'In this course you will learn the fundamentals\
        of Python. This course is designed for beginners and working professional'
      }
    ]

    getAllCourses(){
      return this.courses.length;
    }
    getFreeCourses(){
      return this.courses.filter(course=>course.type ==='Free').length;

    }
    getPremiumCourses(){
      return this.courses.filter(course=>course.type==='Premium').length;
    }
}
