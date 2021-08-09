class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

class CourseList {
  classes = [];
  fetchClasses() {
    this.classes = [new Course('Music', 40, 100), new Course('Coding', 18, 33)];
    // this.render(this.classes);
  }

  addLengthAndPrice() {
    let totalLength = 0;
    let totalPrice = 0;
    this.classes.forEach(course => {
      const { title, length, price } = course;
      totalLength += length;
      totalPrice += price;
      console.log(length / price, title);
    });
    console.log(`
    Total Length of all your courses: ${totalLength} hours
    Total Price of all of your courses: \$${totalPrice}`);
  }

  publish() {
    this.classes.forEach(course => {
      const { title, length, price } = course;
      console.log(`
        Title of course: ${title}
        Length of Course: ${length}
        Price of Course: ${price}
        Value of Course: ${length / price}`);
    });
  }
}

class PracticalCourse {
  createCourse() {
    const pCourse = new Course('practical', 100000, 1);
    pCourse.numOfExcersizes = 2;
  }

  render(course) {
    console.log(course);
  }
}

class TheoreticalCourse {
  createCourse() {
    const tCourse = new Course('theoretical', 3, 0.5);
    this.publish(tCourse);
  }
  publish(course) {
    const { title, length, price } = course;
    console.log(`THEORETICAL COURSE:
    Title of course: ${title}
    Length of Course: ${length}
    Price of Course: ${price}
    `);
  }
}

const courseList = new CourseList();
courseList.fetchClasses();
courseList.publish();
courseList.addLengthAndPrice();

const pCourse = new PracticalCourse();
pCourse.createCourse();

const tCourse = new TheoreticalCourse();
tCourse.createCourse();
