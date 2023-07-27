const questionsArray = document.querySelectorAll('.question');
const itemsArray = document.querySelectorAll('.item');
resetDef();
// console.dir(questionsArray[0])
// let currActive = document.querySelector('.active');
// let questionEle =currActive.querySelector('.question');
// let answerEle =currActive.querySelector('.answer');
// let imgEle =currActive.querySelector('.arrow');
// answerEle.style.display='block';
// questionEle.style.color='hsl(238, 29%, 16%)';
// console.log(imgEle);
// rotateArrow(imgEle);

function hoverState(ele) {
    console.log('hi opp')
    ele.style.background ='red';
    // ele.style.background ='red';
}

function rotateArrow(x)
{
    x.style.transform='rotate(180deg)';
}

function addActive(x){
                console.log(x);
                 x.classList.add('active');
                let childele = Array.from(x.childNodes);
                console.log(childele);
                let questionEle =x.querySelector('.question');
                let answerEle =x.querySelector('.answer');
                questionEle.style.color='hsl(238, 29%, 16%)';
                // questionEle.style.fontWeight='700';
                answerEle.style.display='block';
            }
function removeActive(x){
                x.classList.remove('active');
                // x.style.background='aqua'
                let questionEle =x.querySelector('.question');
                let answerEle =x.querySelector('.answer');
                questionEle.style.color='hsl(240, 6%, 50%)';
                // questionEle.style.fontWeight='400';
                answerEle.style.display='none';
}

function resetDef()
{
    let arr=Array.from(itemsArray);
    for (let item of arr)
    {
        let ques =item.querySelector('.question');
        let ans= item.querySelector('.answer');
        let svg =ques.querySelector('.arrow');
        ans.style.display='none';
        ques.style.color='hsl(240, 6%, 50%)'
        svg.classList.remove('rotated');
        
    }
}

let qsArr = Array.from(questionsArray);
for(let x of qsArr)
{
    // x.addEventListener('click',(e)=>{
    //     // console.log(e.target)
    //     let tar= e.target;
    //     let par = tar.closest('.item');
    //     console.log(par);
    //     let itarr=  Array.from(itemsArray);
        
    //     for(let x of itarr)
    //     {
    //         let imgEle = x.querySelector('.arrow');
    //         console.log('hehe x');
            
    //         if(x===par)
    //         {  
    //             if(x.classList.contains('active'))
    //             {
    //                 if(imgEle.classList.contains('rotated'))
    //                 imgEle.classList.remove('rotated');
    //                 removeActive(x);
                    
    //             }else
    //             {
    //                 imgEle.classList.add('rotated');
    //                 addActive(x);
    //             }
    //         }
    //         else
    //         {
    //             let imgEle =x.querySelector('.arrow');
    //             imgEle.classList.remove('rotated');
    //             removeActive(x);
    //         }
    //     }
    // });
    x.addEventListener('click',(e)=>{
        let tar= e.target;
        let item = tar.closest('.item');
        let ques =item.querySelector('.question');
        let ans= item.querySelector('.answer');
        let svg =ques.querySelector('.arrow');
        console.log(ans.style.display);
        if( ans.style.display==='none')
        {
            resetDef();
            ans.style.display='block';
            svg.classList.add('rotated');
            ques.style.color='hsl(238, 29%, 16%)';
        }
        else{
           resetDef();
        }

    })
}
