
/*
asenkron broblemi ornek
*/

const users = [
    {
        userId : 5,
        post : "yasin post 1"
    },
    {
        userId : 5,
        post : "yasin post 2"
    },
    {
        userId : 5,
        post : "yasin post 3"
    },
    {
        userId : 6,
        post : "kamal post 1"
    },
    {
        userId : 7,
        post : "isa post 1"
    }
    
]

//user id
// post buy user id
function getUserId(){
    setTimeout(() => {
        //servise gittik ve cevap aldik
        return 5;
    }, 1000);
}
function getPostByUserId(userId){
    console.log(userId) //! hepisi ayni anda calistigi icin "undefined" kaldi,getId isi tamamlanmadan getPost yapamicak
    // gercek bir rest api ya istek atacaksiniz
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
          
    }, 500);
}

let userId =  getUserId();

getPostByUserId(userId);


/*
yukardaki aseknron problemini senkrona cevrip cozelim
*/
// function getUserId(callBack){
//     setTimeout(() => {
//         //servise gittik ve cevap aldik
//         let userId = 5 ;
//         callBack(userId)
//     }, 1000);
// }
// function getPostByUserId(userId){
// //    // console.log(userId) //! hepisi ayni anda calistigi icin "undefined" kaldi,getId isi tamamlanmadan getPost yapamicak
    
//     setTimeout(() => {
//         users.forEach((user)=>{
//             if(user.userId===userId){
//                 console.log(user.post);
//             }
//         })
          
//     }, 500);
// }

// getUserId(getPostByUserId);
