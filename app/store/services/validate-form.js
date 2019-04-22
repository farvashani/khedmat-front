export default function validateForm (obj){
   
    let msg = ""
    Object.keys(obj).forEach((key) => {
        if(obj[key] === null){
           return msg = 'پر کردن تمامی فیلدها ضروری است!'

        }else{
           switch (key) {
               case 'email':
                   if(!validateType(key,obj[key])){
                    return msg= 'فرمت ایمیل وارد شده صحیح نیست!'
                   }
                   break;
               case 'mobile':
                   if(!validateType(key,obj[key])){
                      return msg= 'فرمت موبایل وارد شده صحیح نیست!'
                   }
                   break;
               default:
                  return msg
                   break;
           }
        }
      
    });
 
    return msg

}

const  validateType = (key,val) => {
    let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let patternPhone = /^0[1-9]\d{7,9}$/g;
    if(key === "mobile") {
        return patternPhone.test(val);

    }else if(key === "email"){
        return patternEmail.test(String(val).toLowerCase());
    }

}