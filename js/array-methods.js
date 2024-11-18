//*! Назва-масиву,Назва-методу(()=>{})

    const friends = ["Boba","Sara","Alex"];

    //*! метод  "forEach" заміняе "for"
    friends.forEach((friend, index, arr)=>{
console.log(`друг ${friend} є ${index} y ${arr}`)
    });

    //*! Метод mad

const friendList = friends.map((friend,index)=>`${friend } це друг, номер ${ index}`)
console.log(friendList);