export class UserService {
  loggedIn = false;
  constructor() {}

  userdetails = JSON.parse(localStorage.getItem('adddata'));

  ValidateUser(userdetails) {
    this.loggedIn = false;
    const userdata = this.userdetails.forEach((data) => {
      // console.log(
      //   data.password === userdetails.password &&
      //     data.username === userdetails.username
      // );
      // console.log(this.loggedIn);

      if (
        data.username === userdetails.username &&
        data.password === userdetails.password
      ) {
        this.loggedIn = true;
      }
    });
    return this.loggedIn;
  }

  deleteuser(email: string) {
    // const newArray = [];
    // console.log(email);
    const deluser = this.userdetails.forEach((delemail, index) => {
      //   console.log(delemail.email === email);
      // if (delemail.email!==email){
      //     newArray.push(delemail)
      // }
      if (delemail.email === email) {
        this.userdetails.splice(index, 1);
      }
    });

    localStorage.setItem('adddata', JSON.stringify(this.userdetails));
  }

  replaceUser(replace) {
    const user = this.userdetails;

    console.log(user.username);
    const email = user.findIndex(
      (useremail) => useremail.email === replace.email
    );

    user[email] = replace;
    localStorage.setItem('adddata', JSON.stringify(user));
    return user;
  }
}
