export default class UserService{
    constructor({userRepository}){
      this.userRepository=userRepository  
    }

    findAllUsers(){
        return this.userRepository.find()
    }
    //  create data 
    
  registerUser (data){
    return  this.userRepository.createUser(data)
  }
    
}