class App {

  constructor(){

    
    var a = new HeaderFooter();
    a.display('body');

    var teacherview = new TeacherView();
    teacherview.display('.content');

    /*
    var login = new Login();
    login.display('.content');
    */

    /*
    var b = new Test();
    b.display('.content');
    */

    var result = new ResultPage();
    result.display('.content');



    var testUserList = new UserList();
    console.log(testUserList);



 
    
  }
}
