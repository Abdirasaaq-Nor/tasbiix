document.addEventListener('DOMContentLoaded',() => {
        document.querySelector('#btn_1').onclick = () => {
                document.querySelector('#count_dis').style.display = "block"
                const myclass = document.querySelector('.sec');
                myclass.classList.add('ss');
        }
})




document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#cancel').onclick = () => {
                document.querySelector('#count_dis').style.display = 'none'
        }
})



let count = 0
document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#add_btn').onclick = () => {
                count += 1
                document.querySelector('#counter').innerHTML = count
                document.querySelector('#reset').style.display = 'none'
        }
})



document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#decrease_btn').onclick = () => {
                if (count > 0){
                        
                        count -= 1
                        document.querySelector('#counter').innerHTML = count  
                        document.querySelector('#reset').style.display = 'none'   
                   }
                }
})




// ..................................reset Button ....................

document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#reset_btn').onclick = () => {
                if (count <= 0 ){
                        document.querySelector('#reset_btn').disabled = false;

                } else {

                        document.querySelector('#reset').style.display = 'block'
                         document.querySelector('#counter').innerHTML = 0
                         document.querySelector('#show_tasb').style.display = 'block'
                         const f  = document.querySelector('#show_tasb')
                         f.classList.add('li_rest')
                         count  = 0
                }
               
        }
        
})






// ................................. workinf on set button to create li ...........................

document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#set_btn').onclick  = (e) => {
                const li = document.createElement('li')
                const input_value = document.querySelector('#input_value')
                const task  = input_value.value
                li.innerHTML = task

                const s  = document.querySelector('#show_tasb').append(li)
               

                document.querySelector('#show').style.display = 'none'
                document.querySelector('#hide').style.display = 'block'
                // document.querySelector('#show_tasb').style.opacity = 1;
                // const reset_name_show  = document.querySelector('.reset_counter_name')
                // reset_name_show.classList.add('reset_counter_name_show')

                
                e.preventDefault()
// ,........................ solving problem startd here /...............
                if(task != undefined){
                        const input_value = document.querySelector('#input_value')
                        const f  = document.querySelector('#show_tasb').append(li)
                        const old_tedxt = document.querySelector('li')
                        input_  =input_value.value
                       
                        console.log(f)
                           
                        

                        // console.log(old_tedxt)
                        // console.log('is not empty')
                }else{
                        console.log('waxaa ku jiro')
                }


        //        if(dd.length > 0){
        //        console.log('wax ayaa ku jro')
        //        }
                input_value.value = ''
                

        }
      
    
})


// ........solving here
// ........................reset counter name value .................
// document.addEventListener('DOMContentLoaded', () =>{
//         document.querySelector('.reset_counter_name').onclick = () => {
//                 document.querySelector('#show_tasb').style.opacity = 0;
//                 const reset = document.querySelector('.reset_counter_name')
//                 reset.classList.add('reset_counter_name_show_2')
//         }
// })



// .......................showm and hide button ..............





document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#hide').onclick = () => {
                document.querySelector('#hide').style.display = 'none'
                document.querySelector('#show').style.display = 'block'
        }
})