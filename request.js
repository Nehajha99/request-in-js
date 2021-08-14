// const axios = require("axios")
// const redline = require("readline-sync")
// const fs = require("fs")
// const api = "http://saral.navgurukul.org/api/courses"
// saralData = axios.get(api)
//     .then(Response =>{
//         let data = (Response.data)
//         let myJsonData = JSON.stringify(data,null,4)
//         fs.writeFileSync("saralData.json",myJsonData)
//         let serialNo = 1
//         for (courses of data["availableCourses"]){
//             console.log(`${serialNo++}.${courses.name}  ${courses.id}`)
//             // serialNo += 1
//         }
//         courses_no = redline.questionInt("enter the courses you want:  ")
//         console.log(data["availableCourses"][courses_no-1]["name"])
//         let id = data["availableCourses"][courses_no-1]["id"]
//         const saralApi = ("http://saral.navgurukul.org/api/courses/"+String(data["availableCourses"][courses_no-1]["id"])+"/exercises")
//         data1 = axios.get(saralApi)
//         .then(Response =>{
//             let parantData = Response.data
//             let myJsonData1 = JSON.stringify(parantData,null,4)
//             fs.writeFileSync("parant.json",myJsonData1)
//             let no=1
//             let no1 =1
//             let arr = []
//             for (child of parantData["data"]){
//                 if (child["childExercises"].length == 0){
//                     console.log(`${no} ${child.name}`)
//                     console.log("    ",no1,".",child["slug"])
//                     no += 1
//                 }
//                 else{
//                     let no2 = 1
//                     console.log(`${no} ${child.name}`)
//                     for (childName of child["childExercises"]){
//                         console.log("   ",no2,".",childName["name"])
//                         no2 += 1
//                     }
//                     no++
//                 }
//             }
            
//             let childData = redline.questionInt("Enter the number of child:  ")
//             console.log(parantData["data"][childData-1]["name"])
//             let serialNo1 = 1
//             for (Data1 of parantData["data"][childData-1]["childExercises"]){
//                 console.log("   ",serialNo1,Data1["name"])
//                 serialNo1 += 1
//             }
//             let slug = redline.questionInt("Enter the number of child:  ")
//             let slugApi =axios.get("http://saral.navgurukul.org/api/courses/"+String(data["availableCourses"][courses_no-1]["id"])+"/exercise/getBySlug?slug="+String(parantData["data"][childData-1]["childExercises"][childData-1]["slug"]))
//             .then(Response =>{
//                 let dataslug = Response.data
//                 let myJsonData1 = JSON.stringify(dataslug,null,4)
//                 fs.writeFileSync("slugData.json",myJsonData1)
//                 console.log(dataslug["content"])
//             })
            
//         })

//     }) 
     
    
  

     
                    





const axios = require("axios")
const redline = require("readline-sync")
const fs = require("fs")
const api = "http://saral.navgurukul.org/api/courses"
saralData = axios.get(api)
    .then(Response =>{
        let data = (Response.data)
        let myJsonData = JSON.stringify(data,null,4)
        fs.writeFileSync("saralData.json",myJsonData)
        let serialNo = 1
        for (courses of data["availableCourses"]){
            console.log(`${serialNo++}.${courses.name}  ${courses.id}`)
            // serialNo += 1
        }
        courses_no = redline.questionInt("enter the courses you want:  ")
        console.log(data["availableCourses"][courses_no-1]["name"])
        let id = data["availableCourses"][courses_no-1]["id"]
        const saralApi = ("http://saral.navgurukul.org/api/courses/"+String(data["availableCourses"][courses_no-1]["id"])+"/exercises")
        data1 = axios.get(saralApi)
        .then(Response =>{
            let parantData = Response.data
            let myJsonData1 = JSON.stringify(parantData,null,4)
            fs.writeFileSync("parant.json",myJsonData1)
            let no=1;
            let no1 =1;
            let arr = [];
            for (child of parantData["data"]){
                if (child["childExercises"].length == 0){
                    console.log(`${no} ${child.name}`)
                    console.log("    ",no1,".",child["slug"])
                    no += 1
                }
                else{
                    let no2 = 1
                    console.log(`${no} ${child.name}`)
                    for (childName of child["childExercises"]){
                        console.log("   ",no2,".",childName["name"])
                        no2 += 1
                    }
                    no++
                }
            }
            
            let childData = redline.questionInt("Enter the number of child:  ")
            console.log(parantData["data"][childData-1]["name"])
            let NUMBER = 1;
            if (parantData["data"][childData-1]["childExercises"].length == 0){
                console.log(NUMBER++,parantData["data"][childData-1]["slug"])
                let slug = redline.questionInt("Enter the number of child:  ")
                let slugApi =axios.get("http://saral.navgurukul.org/api/courses/"+String(data["availableCourses"][courses_no-1]["id"])+"/exercise/getBySlug?slug="+String(parantData["data"][childData-1]["slug"]))
                .then(Response =>{
                    let dataslug = Response.data
                    let myJsonData1 = JSON.stringify(dataslug,null,4)
                    fs.writeFileSync("slugData.json",myJsonData1)
                    console.log(dataslug["content"])
                })
            }
            else{
                parantData["data"][childData-1]["childExercises"].length != 0
                let no3 = 1
                for (childName of parantData["data"][childData-1]["childExercises"]){
                    console.log("   ",no3,".",childName["name"])
                    no3 += 1
                }
                no++
                let slug = redline.questionInt("Enter the number of child:  ")
                axios.get("http://saral.navgurukul.org/api/courses/"+id+"/exercise/getBySlug?slug="+String(parantData["data"][childData-1]["childExercises"][slug-1]["slug"]))
                .then(Response =>{
                    let dataslug = Response.data
                    let myJsonData = JSON.stringify(dataslug,null,4)
                    fs.writeFileSync("slugData.json",myJsonData)
                    console.log(dataslug["content"])
                }) 
            }     


        
    })

})  