var Facebook_Profile = /** @class */ (function () {
    function Facebook_Profile(Name, birthday, age, school, college, city, mobile, email, working, work, familymembers, relationship, quotes, language) {
        var _this = this;
        this.Name = Name;
        this.birthday = birthday;
        this.age = age;
        this.school = school;
        this.college = college;
        this.city = city;
        this.mobile = mobile;
        this.email = email;
        this.working = working;
        this.work = work;
        this.familymembers = familymembers;
        this.relationship = relationship;
        this.quotes = quotes;
        this.language = language;
        this.getfamilymember = function () {
            return _this.familymembers;
        };
        this.getquotes = function () {
            return _this.quotes;
        };
        this.getworking = function () {
            return _this.working;
        };
        this.getwork = function () {
            return _this.work;
        };
        this.getcity = function () {
            return _this.city;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.getschool = function () {
            return _this.school;
        };
        this.getcollege = function () {
            return _this.college;
        };
        this.getbirthday = function () {
            return _this.birthday;
        };
        this.getage = function () {
            return _this.age;
        };
        this.getname = function () {
            return _this.Name;
        };
        this.getmobile = function () {
            return _this.mobile;
        };
        this.knowworking = function () {
            return _this.working;
        };
        this.getrealationship = function () {
            return _this.relationship;
        };
        this.setmobile = function (mobile) {
            return _this.mobile = mobile;
        };
        this.getlanguage = function () {
            return _this.language;
        };
        this.Name = Name;
        this.birthday = birthday;
        this.age = age;
        this.school = school;
        this.college = college;
        this.city = city;
        this.mobile = mobile;
        this.email = email;
        this.working = working;
        this.work = work;
        this.familymembers = familymembers;
        this.relationship = relationship;
        this.quotes = quotes;
        this.language = language;
    }
    return Facebook_Profile;
}());
var fb = new Facebook_Profile("Alisha", "5 July 1997", 21, "Pension Bada Raipur", "ssipmt raipur", "Raipur", 9827181443, "dummy@gmail.com", true, "IT", 7, "none", "to be succesful you need to be haapy with your work", ["english", "hindi", "urdu"]);
console.log(fb);
console.log("Name: " + fb.getname());
console.log("Birthday: " + fb.getbirthday());
console.log("Age: " + fb.getage());
console.log("School: " + fb.getschool());
console.log("College: " + fb.getcollege());
console.log("City: " + fb.getcity());
console.log("Mobile: " + fb.getmobile());
console.log("Email: " + fb.getemail());
console.log("Working: " + fb.getworking());
console.log("Work: " + fb.getwork());
console.log("FamilyMembers: " + fb.getfamilymember());
console.log("Reationship: " + fb.getrealationship());
console.log("Language: " + fb.getlanguage());
console.log("Quotes: " + fb.getquotes());
console.log(' ');
console.log('Mobile changed');
console.log("NewMobileNo:" + fb.setmobile(9827100001));
