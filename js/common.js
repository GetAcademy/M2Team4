function findUser(userId){
    for(let user of model.users){
        if(user.userId == userId){
            return user;
        }
    }
    return null;
}