class Facebook_Profile
{
    constructor(public Name:string,public birthday:string,public age:number,
    public school:string,public college:string,public city:string,public mobile:number,
   public email: string, public working: boolean,public work:string, public familymembers:number,
public relationship:string,public quotes:string ,public language:string[])
{
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
getfamilymember = ()=>
 {
     return this.familymembers;
 }
 getquotes = ()=>
   {
       return this.quotes;
   }
getworking = ()=>
 {
     return this.working;
 }
 getwork = ()=>
   {
       return this.work;
   }
getcity = ()=>
 {
     return this.city;
 }
 getemail= ()=>
   {
       return this.email;
   }
getschool = ()=>
 {
     return this.school;
 }
 getcollege = ()=>
   {
       return this.college;
   }
getbirthday = ()=>
 {
     return this.birthday;
 }
 getage = ()=>
   {
       return this.age;
   }
 getname = ()=>
 {
     return this.Name;
 }
 getmobile = ()=>
   {
       return this.mobile;
   }
 knowworking = ()=>
 {
     return this.working;
 }
 getrealationship = ()=>{
     return this.relationship;
 }
 setmobile = (mobile:number)=>
 {
     return this.mobile = mobile;
 }
 getlanguage = ()=>{
    return this.language;
}
}

 let fb = new Facebook_Profile("Alisha","5 July 1997",21,"Pension Bada Raipur","ssipmt raipur",
"Raipur",9827181443,"dummy@gmail.com",true,"IT",7,"none","to be succesful you need to be haapy with your work",["english","hindi","urdu"])
console.log(fb);
console.log(`Name: ${fb.getname()}`)
console.log(`Birthday: ${fb.getbirthday()}`)
console.log(`Age: ${fb.getage()}`)
console.log(`School: ${fb.getschool()}`)
console.log(`College: ${fb.getcollege()}`)
console.log(`City: ${fb.getcity()}`)
console.log(`Mobile: ${fb.getmobile()}`)
console.log(`Email: ${fb.getemail()}`)
console.log(`Working: ${fb.getworking()}`)
console.log(`Work: ${fb.getwork()}`)
console.log(`FamilyMembers: ${fb.getfamilymember()}`)
console.log(`Reationship: ${fb.getrealationship()}`)
console.log(`Language: ${fb.getlanguage()}`)
console.log(`Quotes: ${fb.getquotes()}`)
console.log(' ')
console.log('Mobile changed')
console.log(`NewMobileNo:${fb.setmobile(9827100001)}`)