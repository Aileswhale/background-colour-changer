// const button = document.querySelector('.btn')
// const bodybcg = document.querySelector('body')
// const color = ['yellow', 'blue', 'red', 'indigo', 'violet', 'black', 'orange', 'green']


// const bodycolor = ()=>{
//     const random = Math.floor(Math.random()*color.length)
//     bodybcg.style.background = color[random]
// }

// button.addEventListener('click', bodycolor)



const button = document.querySelector('.btn')
//const bodybcg = document.querySelector('body')
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
const hex = document.querySelector('.hex')

const hexgenerator = () => {
	    let hexnb = '#'
        for (let i=0; i < 6; i++) {
            let random = Math.floor(Math.random()*hexNumber.length);
	         hexnb +=hexNumber[random];	
            
        }
        document.body.style.background = hexnb
        hex.innerHTML = hexnb

}
button.addEventListener('click', hexgenerator)
